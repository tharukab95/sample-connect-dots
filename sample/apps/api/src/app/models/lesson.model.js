const mongoose = require('mongoose');

var CounterSchema = new mongoose.Schema({
  _id: {type: String, required: true},
  seq: { type: Number, default: 0 }
});
var counter = mongoose.model('counter', CounterSchema);

const lessonSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
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

// lessonSchema.pre('save', function(next) {
//   var doc = this;
//   counter.findByIdAndUpdate({_id: 'entityId'}, {$inc: { seq: 1} }, function(error, counter)   {
//       if(error)
//           return next(error);
//       doc.id = counter.seq;
//       doc.seqNo = counter.seq;
//       next();
//   });
// });

module.exports = mongoose.model('Lesson', lessonSchema);


