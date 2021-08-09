const express = require('express'),
const asyncHandler = require('express-async-handler');
const passport = require('passport');
const courseCtrl = require('../controllers/course.controller');
const Course = require('../models/course.model');
require('mongoose');

const router = express.Router();
module.exports = router;

// router.use(passport.authenticate('jwt', { session: false }));

router.route('/').get(asyncHandler(getAllCourses));

router.route('/').post(asyncHandler(createCourse));

router.route('/:id').put(asyncHandler(saveCourse));

router.route('/:id').delete(asyncHandler(deleteCourse));

router.route('/:courseUrl').get(asyncHandler(getCourseByUrl));


async function getAllCourses(req, res) {
  let courses = await Course.find();
  res.status(200).json({payload: courses});
}

async function createCourse(req, res) {
  const newCourse = req.body;
  let course = await new Course(newCourse).save()
  res.status(200).json(course);
}

async function saveCourse(req, res) {
  const id = req.params["id"],
  changes = req.body;
  let updatedCourse = await Course.findOneAndUpdate({id: id}, changes)
  res.status(200).json(updatedCourse);
}

async function deleteCourse(req, res) {
  const id = req.params["id"],
  const course = await Course.findOneAndRemove({_id: id});
  if (!course) {
    throw new NotFoundError('Course NOT_FOUND with id: ' + id);
  }
  res.status(200).json(course);
}

async function getCourseByUrl(req, res) {
  const courseUrl = req.params["id"];
  let course = await Course.findOne(courseUrl);
  res.status(200).json(course);
}
