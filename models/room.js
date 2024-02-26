const uuid = require('uuid')

class Room{
    constructor(id=uuid.v4(),number,floor){
        this.id = id

        this.number = number
        this.floor = floor 
    }

    static create({id,name,number}) {
        return new Room(id,name,number)
    }
}

module.exports = Room