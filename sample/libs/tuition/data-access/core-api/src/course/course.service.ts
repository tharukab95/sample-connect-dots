import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';
import { CreateCourseDto } from './course.interface';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>
  ) {}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    return await this.coursesRepository.save(createCourseDto);
  }

  findAll(): Promise<Course[]> {
    return this.coursesRepository.find();
  }

  findOne(id: number): Promise<Course> {
    return this.coursesRepository.findOne(id);
  }

  public async update(id: number, newValue: Course): Promise<Course | null> {
    const course = await this.coursesRepository.findOneOrFail(id);
    if (!course.id) {
      // tslint:disable-next-line:no-console
      console.error("Course doesn't exist");
    }
    await this.coursesRepository.update(id, newValue);
    return await this.coursesRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.coursesRepository.delete(id);
  }
}
