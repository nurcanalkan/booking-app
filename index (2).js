const express = require('express')
const bodyParser = require('body-parser')
const GuestsRouter = require('./routes/guests')
const IndexRouter = require('./routes/index')

const app = express()
app.use(bodyParser.json())

app.set('view engine','pug')

app.use('/guests', GuestsRouter)
app.use('/guests', IndexRouter)

