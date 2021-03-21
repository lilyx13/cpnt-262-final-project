const express = require('express')
const gallery = require('../../data/gallery')

const router = express.router()

router.get('/api/v0/gallery', (req, res) => {
  res.json(gallery)
})

module.exports = router