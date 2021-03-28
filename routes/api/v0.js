const express = require('express')

const router = express.Router()

router.get('/admin', (req, res) => {
  res.json()
})

module.exports = router
