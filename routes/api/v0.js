const express = require('express')
const gallery = require('../../data/gallery')

const router = express.Router()

router.get('/api/v0/gallery', (req, res) => {
  res.json(gallery)
})

module.exports = router