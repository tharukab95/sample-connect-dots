import { CourseCategoryTypes } from './course.entity';

export interface CreateCourseDto {
  id: string;
  seqNo: number;
  url: string;
  iconUrl: string;
  courseListIcon?: string;
  description?: string;
  longDescription?: string;
  category: CourseCategoryTypes;
  lessonsCount: number;
  promo?: boolean;
}

