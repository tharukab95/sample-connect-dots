const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  seqNo: {
    type: Number,
  },
  url: {
    type: String,
  },
  iconUrl: {
    type: String,
  },
  courseListIcon: {
    type: String,
  },
  longDescription: {
    type: String,
  },
  category: {
    type: String,
  },
  lessonsCount: {
    type: Number,
  },
  promo: {
    type: String,
  }
});

module.exports = mongoose.model('Courses', courseSchema);


