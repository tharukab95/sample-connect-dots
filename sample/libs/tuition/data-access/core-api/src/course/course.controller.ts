import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { Course } from './course.entity';
import { CreateCourseDto } from './course.interface';
import { CourseService } from './course.service';

@Controller('course')
// @UseGuards(AuthGuard('jwt'))
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  async create(@Body() course: Course) {
    await this.courseService.create(course);
  }

  @Get()
  async findAll(): Promise<Course[]> {
    return this.courseService.findAll();
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() course: Course): Promise<any> {
    course.id =id;
    console.log('Update #' + course.id);
    return this.courseService.update(course.id, course);
  }

  @Delete('/:id/delete')
  async delete(@Param('id') id) {
    await this.courseService.delete(id);
  }
}
