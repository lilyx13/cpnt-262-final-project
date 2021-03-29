const express = require('express')
const formCollection = require('./api/v0')
const surveyData = require('../models/form')
const config = require('../config')

const router = express.Router()

router.use(express.urlencoded({ extended: true }))

router.use((req, res, next) => {
  res.locals = config
  next();
})

// form middleware
router.use('/api', formCollection)

router.post('/contact', async (req, res) => {
  try {
    const surveyItem = new surveyData(req.body)
    surveyItem.save((err, data) => {
      if (err) {
        res.send(`<p>Problem Creating survey entry ${req.body}</p>`)
      }
      res.send(`<p>Created survey entry</p>`)
    })
  } catch (err) {
    res.sendStatus(404)

  }
})

// home page
router.get('/', (req, res) => {
  res.render('pages/index')
})

// about page
router.get('/about-us', (req, res) => {
  res.render('pages/about-us')
})

// store page
router.get('/shop', (req, res) => {
  res.render('pages/shop')
})

// Admin page
router.get('/admin', (req, res) => {
  res.render('pages/admin')
})

// contact
router.get('/contact', (req, res) => {
  res.render('pages/contact')
})

// 404
router.get('/404', (req, res) => {
  res.render('pages/404')
})

module.exports = router
