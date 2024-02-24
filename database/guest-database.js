const BaseDatabase = require('./base-database')
const Guest = require('../guest')

class GuestDatabase extends BaseDatabase{
    findByName(name){
        const objects = this.load()
        return objects.find(o=>o.name==name)
    }

    findByNumber(number){
        const objects = this.load()
        return objects.find(o=>o.name==number)
    }
}

module.exports=new GuestDatabase(guest)