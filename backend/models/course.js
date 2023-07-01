const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: String,
  image: String,
    description: String,
    likes: Number,
    review:[String],
});

module.exports = mongoose.model('Course', courseSchema);