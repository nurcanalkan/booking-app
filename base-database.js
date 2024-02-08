const fs = require('fs')
const flatted = require('flated')

class BaseDatabase{
    constructor(model){
        this.model=model
        this.filename=model.name
    }

    save(objects){
        fs.writeFileSync(`./{this.filename}.json`,flatted.stringfy(objects,null,2))
    }

    load(){
        const file=fs.readFileSync(`./{this.filename}.json`,'utf8')
        const objects=flatted.parse(file)

        return objects.map(this.model.create)
    }

    insert(object){
        const objects=this.load()

        this.save(objects.concat(object))
    }

    remove(index){
      const objects=this.load()
      
      objects.splice(index,1)
      this.save(objects)
    }

    update(object){
        const object=this.load()
        const index=objects.findIndex(o=>o.id==object.id)

        objects.splice(index,1,object)
        this.save(objects)
    }
}

module.exports = BaseDatabase