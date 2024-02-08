const Guest = require('./guest')
const Room = require('./room')
const {guestDatabase , roomDatabase} = require('./database')

const nurcan = Guest.create({name:'Nurcan',number:'Five'})

function printBooking(booking){
    console.log(`${booking.guest.name} booked {booking.room.number}`)
}

function printBookingHistory(guest){
    if(guest.bookings.length==0)
     return console.log(`${(guest.name)} has no bookings yet.`)
    guest.bookings.forEach(printBooking) 
}

const guest = guestDatabase.load()
guest.forEach(printBookingHistory)
nurcan.book(five)
guestDatabase.update(nurcan)