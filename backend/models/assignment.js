const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
  Mentor_email:  String,
  Mentee_email: String,
});

module.exports = mongoose.model('Assignment', assignmentSchema);