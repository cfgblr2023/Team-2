const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  mapping: [String],
  volunteered: Boolean,
  role: String,
  interest: String,
  skills: [String],
  teaching: Boolean,
  worked_before: Boolean,
  call: Boolean,
  availability: String,
  isGoogle: {type: Boolean, default: false}
});

module.exports = mongoose.model('Mentor', mentorSchema);