const mongoose = require('./_connection');

// import seed
const dbseed = require('./seeds/formStorage');

// model
const formStorage = require('./models/form');


formStorage.insertMany(dbseed, (error, form) => {
  if (error) {
    console.log(error)
  }
  console.log('Data Import Complete.')
  mongoose.connection.close()
})
