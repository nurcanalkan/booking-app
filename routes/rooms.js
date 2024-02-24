const{guestDatabase,roomDatabase} = require('../database')
const { parse, stringify, toJSON, fromJSON }  = require ('flatted')

const router = require('express').Router()

router.get('/', async (req,res) => {
    const rooms = await roomDatabase.load()

    res.render('rooms', {rooms})
})

router.post('/', async (req,res) => {
  const room = await roomDatabaseDatabase.insert(req.body)

  res.send(room)
})
router.delete('/:roomId', async (req,res) => {
  await roomDatabase.removeBy('id', req.params.guestId)

  res.send('OK')
})

router.get('/:roomId',async (req,res) => {
  const room = await roomDatabase.find(req.params.roomId)
  if (!room) return res.status(404).send('Cannot find guest')
  res.render('room', {room})
})

router.post('./:roomId/bookings', async(req,res) => {
  const { roomId } = req.params
  const { guestId,name } = req.body

  BookingService,createBooking(roomId,guestId,number)

  res.send('ok')
})

module.exports = router