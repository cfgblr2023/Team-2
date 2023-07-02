const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mentorSchema = new Schema({
  email: { type: String, required: true, unique:true, trim: true, lowercase: true},
  fullname: { type: String, required: true,trim: true},
  password: { type: String, required: true,trim: true},
  phone: { type: Number, required: true},
  city: { type: String, required: true,trim: true},
  curr_add: { type: String, required: true,trim: true},
  gender: { type: Boolean, required: true,trim: true},
  dob: { type: String, required: true,trim: true},
  age: { type: String, required: true, trim: true},
  occupation: { type: String, required: true,trim: true},
  organization: { type: String, required: true,trim: true},
  experience: { type: String, required: true,trim: true},
  languages: { type: [String], required: true,trim: true},
  days_available: { type: [String], required: true,trim: true},
  time_slots: { type: String, required: true,trim: true},
  mapping: { type: [String], required: true,trim: true},
  volunteered: { type: Boolean, required: true},
  role: { type: String, required: true,trim: true},
  interest: { type: String, required: true,trim: true},
  skills: { type: [String], required: true,trim: true},
  teaching: { type: Boolean, required: true},
  worked_before: { type: Boolean, required: true},
  call: { type: Boolean, required: true},
  availability: { type: String, required: true,trim: true},
  isGoogle: {type: Boolean, default: false},
  googleEmail : {type: String}
});

module.exports = mongoose.model('Mentor', mentorSchema);