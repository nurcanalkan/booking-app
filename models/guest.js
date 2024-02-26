const Booking = require('./booking')
const uuid = require('uuid')

class Guest{
    constructor(id=uuid.v4(),name,number){
        this.id = id

        this.name = name
        this.bookings = []
        this.number = this.number
    }

    book(room,number){
        const booking = new Booking(room,this,number)

        this.bookings.push(booking)
        return booking
    }

    static create({id,name,number,bookings}) {
        return new Guest(id,name,number,bookings)
    }
}

module.exports = Guest