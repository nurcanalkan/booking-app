const{guestDatabase,roomDatabase} = require('../database')
const printBookingHistory = require('./lib/print-booking-history')

async function main(){
    const five = await roomDatabase.findBy('number','Five')
    const nurcan = await guestDatabase.findByName('Nurcan')

    nurcan.book = (five)
    guestDatabase.update(nurcan)

    printBookingHistory(armagan)

    console.log(await guestDatabase.findBy('number','Five'))
}

main()