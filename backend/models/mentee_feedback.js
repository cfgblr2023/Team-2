const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mentee_feedbackSchema = new Schema({
  name: String,
  email: String,
  description: String,
    
});

module.exports = mongoose.model('Mentee_Feedback', mentee_feedbackSchema);