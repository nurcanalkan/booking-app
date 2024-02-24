const{guestDatabase,roomDatabase} = require('../database')
const { parse, stringify, toJSON, fromJSON }  = require ('flatted')

const router = require('express').Router()

router.get('/', async (req,res) => {
    const guests = await guestDatabase.load()

    res.render('guests', {guests})
})

router.post('/', async (req,res) => {
  const guest = await guestDatabase.insert(req.body)

  res.send(guest)
})

router.delete('/:guestId', async (req,res) => {
  await guestDatabase.removeBy('id', req.params.guestId)

  res.send('OK')
})

router.get('/:guestId',async (req,res) => {
  const guest = await guestDatabase.find(req.params.guestId)
  if (!guest) return res.status(404).send('Cannot find guest')
  res.render('guest', {guest})
})

router.post('./:guestId/bookings', async(req,res) => {
  const { guestId } = req.params
  const { roomId,number } = req.body

  BookingService,createBooking(guestId,roomId,number)

  res.send('ok')
})

module.exports = router