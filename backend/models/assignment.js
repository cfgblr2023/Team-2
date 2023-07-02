const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignmentSchema = new Schema({
<<<<<<< HEAD
  Mentor_email:  String,
  Mentee_email: String,
});

module.exports = mongoose.model('Assignment', assignmentSchema);
=======
  Mentor_email: {type: String},
  Mentee_email: {type: String},
});

module.exports = mongoose.model('Assignment', assignmentSchema); 
>>>>>>> b50190ef482a16cffef0a5b0c41e22eef6624187
