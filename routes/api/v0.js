const mongoose = require('../../_connection')
const express = require('express')
const Form = require('../../models/form')

const router = express.Router()

router.get('/api/v0/Form', async (req, res) => {
  try {
    const formCollection = await Form.find({})
    res.json(formCollection)
  } catch (err) {
    res.sendStatus(404)
  }
})

module.exports = router
