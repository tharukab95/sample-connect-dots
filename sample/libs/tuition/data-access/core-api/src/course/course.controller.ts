import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Course } from './course.entity';
import { CreateCourseDto } from './course.interface';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  async create(
    @Body() createCourseDto: CreateCourseDto
  ): Promise<CreateCourseDto> {
    return this.courseService.create(createCourseDto);
  }

  @Get()
  async findAll(): Promise<Course[]> {
    return this.courseService.findAll();
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() course: Course): Promise<any> {
    course.id = Number(id);
    console.log('Update #' + course.id);
    return this.courseService.update(course.id, course);
  }

  @Delete('/:id/delete')
  async delete(@Param('id') id) {
    await this.courseService.delete(Number(id));
  }
}
