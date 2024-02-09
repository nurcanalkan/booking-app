const Guest = require('./models/guest')
const Room = require('./models/room')
const guestDatabase = require('./database/guest-database')
const roomDatabase = require('./database/room-database')

const printBookingHistory = require('./print-booking-history')

const nurcan = Guest.create({name:'Nurcan' ,number:'Five'})
const five = Room.create({number:'Five'})

nurcan.book(five)

async function main(){
    try{
        await guestDatabase.save([nurcan])

        await roomDatabase.save([five])

        const betul = Guest.create({name:'Betul'})
        await guestDatabase.insert(betul)

        const guests = await guestDatabase.load()
        guests.forEach(printBookingHistory)
    }catch(e){
        return console.log(e)
    }
}

main()