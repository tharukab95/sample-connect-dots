import { CourseCategoryTypes } from './course.entity';
export interface CreateCourseDto {
  url: string;
  iconUrl: string;
  description: string;
  longDescription: string;
  category: CourseCategoryTypes;
}

