const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define the schema
// const itemSchema = new Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
// });
const mentorSchema = new Schema({
  email: String,
  fullname: String,
  phone: Number,
  city: String,
  curr_add: String,
  gender: Boolean,
  dob: String,
  age: String,
  occupation: String,
  organization: String,
  experience: String,
  languages: [String],
  days_available: [String],
  time_slots: String,

  permanent_add: String,
  edu_status: String,
  institution: String,
  program: String,
  question_fiveyears: String,
  question_participation: String,
  support: [String],
  hours: Boolean,
  mapping: [String],
  volunteered: Boolean,
  role: String,
  interest: String,
  skills: [String],
  teaching: Boolean,
  worked_before: Boolean,
  call: Boolean,
  availability: String,

});



// Create the model
module.exports = mongoose.model('Mentor', mentorSchema);