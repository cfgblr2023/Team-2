const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define the schema
// const itemSchema = new Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
// });
const userSchema = new Schema({
  email: String,
  username: String,
  password: String
});



// Create the model
module.exports = mongoose.model('User', userSchema);