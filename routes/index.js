const express = require('express')
const config = require('../config')

const router = express.Router()

router.use((req, res, next) => {
  res.locals = config
  next()
})

// home page
router.get('/', (req, res) => {
  res.render('pages/index')
})

// about page
router.get('/', (req, res) => {
  res.render('pages/about')
})

// store page
router.get('/', (req, res) => {
  res.render('pages/store')
})

// 404
router.get('/', (req, res) => {
  res.render('pages/404')
})

module.exports = router
