const express = require('express')
const path = require('path')
//const mongoose = require('./_connection')
const formModel = require('./models/form')
const routes = require('./routes')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

// Views Engine
app.set('view engine', 'ejs')

// Router for Pages
app.use('/', routes)

// Error Page
app.use('/', (req, res) => {
  res.status(404)
  res.render('pages/404')
})

// Listener
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`)
})
