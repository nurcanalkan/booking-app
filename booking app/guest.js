const Booking = require('./booking')

class Guest{
    constructor(name,number){
       this.name=name
       this.bookings=[]
       this.number=this.number
    }

    book(room,number){
    const booking = new Booking(room,this,number)

    this.bookings.push(booking)
    return booking
    }
} 

module.exports=Guest