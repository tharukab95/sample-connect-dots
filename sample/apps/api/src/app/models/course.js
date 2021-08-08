const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

const courseSchema = new mongoose.Schema({
  seqNo: {
    type: Number,
    default: 1,
    required: true
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
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  category: {
    type: String
  },
  lessonsCount: {
    type: Number,
    required: true
  },
  promo: {
    type: Boolean
  }
}, {
  versionKey: false
});

courseSchema.plugin(autoIncrement.plugin, { model: 'Course', field: 'seqNo', startAt: 1});

module.exports = mongoose.model('Course', courseSchema);


