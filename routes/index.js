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
