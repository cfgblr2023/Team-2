const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menteeSchema = new Schema({
  email: {type: String, unique: true, required: true, trim: true, lowercase: true},
  fullname: {type: String, required: true, trim: true},
  password: { type: String, required: true,trim: true},
  phone: {type: Number, required: true},
  gender: {type: Boolean, required: true},
  dob: {type: String, required: true, trim: true},
  age: {type: String, required: true},
  languages: {type: [String], required: true},
  curr_add: {type: String, required: true, trim: true},
  permanent_add:{type: String, required: true, trim: true},
  edu_status: {type: String, required: true, trim: true},
  institution: {type: String, required: true, trim: true},
  program: {type: String, required: true, trim: true},
  question_fiveyears: {type: String, required: true, trim: true},
  question_participation : {type: [String], required: true},
  support: {type: [String], required: true},
  hours: {type: Boolean, required: true},
  days_available: {type: [String], required: true},
  time_slots: {type: String, required: true, trim: true},
  attend_allsessions: {type: Boolean, required: true}
});

// Create the model
module.exports = mongoose.model('Mentee', menteeSchema);