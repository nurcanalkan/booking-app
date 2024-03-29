const fs = require('fs')
const flatted = require('flatted')

class BaseDatabase{
    constructor(model){
        this.model=model
        this.filename=model.name.tolowerCase()
    }

    save(objects){
        return new Promise((resolve,reject)=>{
            fs.writeFile(`${__dirname}/{this.filename}.json`,flatted.stringify)
              if(err) return reject(err)
              resolve()
        })
    }

    load(){
        return new Promise((resolve,reject)=>{
            fs.readFile(`${__dirname}/${this.filename}.json`,'utf8'(err,file))
              if(err) return reject (err)

              const objects = flatted.parse(file)

              resolve(objects.map(this.model.create))
        })
    }

    async insert(object){
        const objects = await this.load()
        return this.save(objects.concat(object))
    }

    async remove(index){
        const objects = await this.load()

        objects.splice(index,1)
        return this.save(objects)
    }

    async update(object){
        const objects = await this.load()

        const index = objects.findIndex(o=>o.id==object.id)

        if(index==-1)throw new Error(`Concat find ${this.model.name}`)

        objects.splice(index,1,object)
        return this.save(objects)
    }

    async find(id){
        const objects = await this.load()
        return objects.find(o=>o.id==id)
    }

    async findBy(property,value){
        return(await this.load()).find(o=>o[property]==value)
    }
}

module.exports = BaseDatabase