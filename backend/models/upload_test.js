const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const test_Schema = new Schema({
  name: String,
  email: String,
  form_link: String,    
});

module.exports = mongoose.model('Upload_Test', test_Schema);