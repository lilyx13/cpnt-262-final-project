const express = require('express')
const formModel = require('../models/form')

const router = express.Router()

router.get('/api/v0/form', async (req, res) => {
  try {
    // double check on naming convention using Find
    const formCollection = await Survey.Find({})
    res.json(formCollection);
  } catch (err) {
    res.sendStatus(404)
  }
})

module.exports = router;
