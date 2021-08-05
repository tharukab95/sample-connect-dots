import { Request, Response } from 'express';
import { LESSONS } from "./db-data";
import { setTimeout } from "timers";
const { buildSanitizeFunction } = require('express-validator');
const sanitizeBodyAndQuery = buildSanitizeFunction(['body', 'query']);

export function searchLessons(req: Request, res: Response) {

  console.log('Searching for lessons ...');

  const queryParams = req.query;

  const courseId =  queryParams.courseId;
  // const filter = req.query.filter;
  const sortOrder = queryParams.sortOrder || 'asc';
  const pageNumber = queryParams.pageNumber || 0;
  const pageSize = queryParams.pageSize;

  let lessons = Object.values(LESSONS).filter(lesson => lesson.courseId.toString() == courseId).sort((l1, l2) => l1.id - l2.id);

  // if (filter) {
  //     lessons = lessons.filter(lesson => lesson.description.trim().toLowerCase().search(filter.toLowerCase()) >= 0);
  // }

  if (sortOrder == "desc") {
    lessons = lessons.reverse();
  }

  const initialPos = 0* 3;

  // console.log(`Retrieving lessons page starting at position ${initialPos}, page size ${pageSize} for course ${courseId}`);

  const lessonsPage = lessons.slice(initialPos, 3);

  res.status(200).json(lessonsPage);

}
