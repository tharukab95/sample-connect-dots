const Joi = require('joi');
const Course = require('../models/course.model');

// const courseSchema = Joi.object({
//   id: Joi.number().integer().positive(),
//   seqNo: Joi.number().integer().positive(),
//   url: Joi.string(),
//   iconUrl:Joi.string(),
//   courseListIcon: Joi.string(),
//   longDescription: Joi.string(),
//   createdAt: Joi.date(),
//   category: Joi.string(),
//   lessonsCount: Joi.number().integer().positive(),
//   promo:  Joi.boolean()
// })

async function getAllCourses() {
  // id = await Joi.validate(id, courseSchema, { abortEarly: false });
  const courses = await Course.find();
  return courses;
}

async function createCourse(course) {
  // course = await Joi.validate(course, courseSchema, { abortEarly: false });
  return await new Course(newCourse).save();
}

async function saveCourse(id) {
  let course = await courseCtrl.saveCourse(req.body);
  res.json(course);
}

async function deleteCourse(id) {
  const course = await Course.findOneAndRemove({_id: id});
  if (!course) {
    throw new NotFoundError('Course NOT_FOUND with id: ' + id);
  }
  return course;
}

async function getCourseByUrl(courseUrl) {
  return await Course.findOne({url: courseUrl});
}

module.exports = {
  getAllCourses,
  createCourse,
  saveCourse,
  deleteCourse,
  getCourseByUrl
}
