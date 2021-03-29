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
  useFrequency: String,
   // third fieldset
  sativa: Boolean,
  indica: Boolean,
  hybrid: Boolean
})

module.exports = mongoose.model('Form', formSchema)
