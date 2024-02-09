const{guestDatabase,roomDatabase} = require('./database')

const printBookingHistory = require('./print-booking-history')

const five = roomDatabase.finBy('number','Five')
const nurcan = guestDatabase.findByName('Nurcan')

nurcan.book = (five)
guestDatabase.update(nurcan)

printBookingHistory(nurcan)

console.log(guestDatabase.findBy('number','Five'))