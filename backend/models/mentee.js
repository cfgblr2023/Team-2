const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define the schema
// const itemSchema = new Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
// });
const menteeSchema = new Schema({
  email: String,
  fullname: String,
  phone: Number,
  gender: Boolean,
  dob: Date,
  age: String,
  languages: [String],
  curr_add: String,
  permanent_add: String,
  edu_status: String,
  institution: String,
  program: String,
  question_fiveyears: String,
  question_participation: String,
  support: [String],
  hours: Boolean,
  days_available: [String],
  time_slots: String,
  attend_allsessions: Boolean,

});



// Create the model
module.exports = mongoose.model('Mentee', menteeSchema);