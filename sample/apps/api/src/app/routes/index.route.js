const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const courseRoute = require('./course.route');
const lessonRoute = require('./lesson.route');
const subscriptionRoute = require('./subscription.route');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/courses', courseRoute)
router.use('/course', courseRoute);
router.use('/lessons', lessonRoute)
router.use('/subscriptions', subscriptionRoute);

module.exports = router;
