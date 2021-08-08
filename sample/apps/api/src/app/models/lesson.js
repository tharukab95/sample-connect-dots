const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  duration: {
    type: String,
  },
  courseListIcon: {
    type: String,
  },
  seqNo: {
    type: Number,
    required: true
  },
  courseId: {
    type: Number,
    required: true
  },
})

lessonSchema.plugin(autoIncrement.plugin, { model: 'Lesson', field: 'seqNo', startAt: 1});

module.exports = mongoose.model('Lesson', lessonSchema);


