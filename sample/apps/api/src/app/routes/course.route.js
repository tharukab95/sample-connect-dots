const express = require('express'),
const asyncHandler = require('express-async-handler');
const passport = require('passport');
const courseCtrl = require('../controllers/course.controller');

const router = express.Router();
module.exports = router;

// router.use(passport.authenticate('jwt', { session: false }));

router.route('/').get(asyncHandler(getAllCourses));

router.route('/').post(asyncHandler(createCouse));

router.route('/').put(asyncHandler(saveCourse));

router.route('/').delete(asyncHandler(deleteCourse));

router.route('/').get(asyncHandler(getCourseByUrl));

async function getAllCourses(req, res) {
  let courses = await courseCtrl.getAllCourses(req.body);
  res.json(courses);
}

async function createCouse(req, res) {
  let course = await courseCtrl.createCouse(req.body);
  res.json(course);
}

async function saveCourse(req, res) {
  let course = await courseCtrl.saveCourse(req.params["id"]);
  res.json(course);
}

async function deleteCourse(req, res) {
  let course = await courseCtrl.deleteCourse(req.params["id"]);
  res.json(course);
}

async function getCourseByUrl(req, res) {
  let course = await courseCtrl.getCourseByUrl(req.params["courseUrl"]);
  res.json(course);
}
