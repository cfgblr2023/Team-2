const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mentor_feedbackSchema = new Schema({
  name: String,
  email: String,
  description: String,
    
});

module.exports = mongoose.model('Mentor_Feedback', mentor_feedbackSchema);