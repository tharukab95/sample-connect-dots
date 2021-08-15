import { EntityRepository, Repository } from 'typeorm';
import { Course } from './course.entity';
import { CreateCourseDto } from './course.interface';

@EntityRepository(Course)
export class CourseRepository extends Repository<Course> {

  // createCourse = async (createCourseDto: CreateCourseDto) => {
  //   return await this.save(createCourseDto);
  // };

}
