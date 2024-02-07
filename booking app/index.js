const Guest = require('./guest')
const Room = require('./room')

const nurcan = new Guest('Nurcan','Five')
const five  = new Room('Five','One')

nurcan.book(five)

function printBooking(booking){
    console.log(`${booking.guest.name} booked ${booking.room.number}`)
}

function printBookingHistory(guest){
    guest.bookings.forEach(printBooking)
}

printBookingHistory(nurcan)