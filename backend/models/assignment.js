const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
  Mentor_email: {type: String},
  Mentee_email: {type: String},
});

module.exports = mongoose.model('Assignment', assignmentSchema); 