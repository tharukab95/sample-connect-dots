import * as express from 'express';
const { buildSanitizeFunction } = require('express-validator');
const sanitizeBodyAndQuery = buildSanitizeFunction(['body', 'query']);
import { getAllCourses, getCourseByUrl } from "./app/get-courses.route";
import { searchLessons } from "./app/search-lessons.route";
import { loginUser } from "./app/auth.route";
import { saveCourse } from "./app/save-course.route";
import { createCourse } from './app/create-course.route';
import { deleteCourse } from './app/delete-course.route';

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.route('/api/login').post(loginUser);

app.route('/api/courses').get(getAllCourses);

app.route('/api/course').post(createCourse);

app.route('/api/course/:id').put(saveCourse);

app.route('/api/course/:id').delete(deleteCourse);

app.route('/api/courses/:courseUrl').get(getCourseByUrl);

app.route('/api/lessons').get(searchLessons);

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

const port = process.env.port || 3000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
