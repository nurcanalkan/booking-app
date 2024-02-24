const BaseDatabase = require('./base-database')
const Room = require('../room')

class RoomDatabase extends BaseDatabase{
    findByName(number){
        const objects = this.load()
        return objects.find(o=>o.number==number)
    }
}

module.exports= new RoomDatabase(Room)