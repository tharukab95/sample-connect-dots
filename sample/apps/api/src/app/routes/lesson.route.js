const express = require('express'),
const asyncHandler = require('express-async-handler');
const passport = require('passport');
const Lesson = require('../models/lesson.model');
require('mongoose');

const router = express.Router();
module.exports = router;

// router.use(passport.authenticate('jwt', { session: false }));

router.route('/').get(asyncHandler(searchLessons));

async function searchLessons(req, res) {
  const queryParams = req.query;

  const courseId = queryParams.courseId,
        filter = queryParams.filter || '',
        sortOrder = queryParams.sortOrder || 'asc',
        pageNumber = parseInt(queryParams.pageNumber) || 0,
        pageSize = parseInt(queryParams.pageSize);

  const searchedLessons = await Lesson.find({courseId: courseId})

  let lessons = Object.values(searchedLessons)
    .filter(lesson => lesson.courseId == courseId).sort((l1, l2) => l1.id - l2.id);

  if (filter) {
      lessons = lessons.filter(lesson =>
          lesson.description.trim().toLowerCase().search(filter.toLowerCase()) >= 0);
  }

  if (sortOrder == "desc") {
    lessons = lessons.reverse();
  }

  const initialPos = pageNumber * pageSize;

  console.log(`Retrieving lessons page starting at position ${initialPos}, page size ${pageSize} for course ${courseId}`);

  const lessonsPage = lessons.slice(initialPos, initialPos + pageSize);

  res.status(200).json(lessonsPage);

}

