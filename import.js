require('dotenv').config();
const mongoose = require('mongoose');
// import seed
const gallery = require('./seeds/gallery');
const storage = require('./seeds/formStorage');

// model
const form = require('./models/form');
const image = require('./models/image');
const formCollection = require('./seeds/formStorage');

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});


storage.insertMany(formCollection, function (error, form) {
  if (error) {
    console.log(error)
  }
  console.log('Data Import Complete.')
  mongoose.connection.close()
})