function printBooking(booking){
    console.log(`${booking.guest.name} booked {booking.room.number}`)
}

function printBookingHistory(guest){
    if(guest.bookings.length==0)
     return console.log(`${(guest.name)} has no bookings yet.`)
    guest.bookings.forEach(printBooking)
}

module.exports = printBookingHistorry 