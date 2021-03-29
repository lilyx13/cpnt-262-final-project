const mongoose = require('mongoose')

// schema
const formSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  // first fieldset
  joints: Boolean,
  vaping: Boolean,
  bongs: Boolean,
  pipes: Boolean,
  eadibles: Boolean,
  beverages: Boolean,
  drops: Boolean,
  spray: Boolean,
  //// second fieldset
  daily: Boolean,
  often: Boolean,
  casually: Boolean,
  rarely: Boolean,
})

module.exports = mongoose.model('Form', formSchema)
