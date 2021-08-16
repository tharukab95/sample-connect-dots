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
import { Lesson } from './lesson.entity';
import { LessonService } from './lesson.service';
import { AdminGuard, AuthenticationGuard } from '@tuition/api-utility';
@Controller('lessons')
@UseGuards(AuthenticationGuard)
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Post()
  async create(@Body() lesson: Lesson) {
    return this.lessonService.create(lesson);
  }

  @Get(':id')
  async findAll(@Param('id') id): Promise<Lesson[]> {
    return this.lessonService.findAll(id);
  }

  @Put(':id/update')
  async update(@Param('id') id, @Body() course: Lesson): Promise<any> {
    course.id = Number(id);
    console.log('Update #' + course.id);
    return this.lessonService.update(course.id, course);
  }

  @Delete('/:id/delete')
  async delete(@Param('id') id) {
    await this.lessonService.delete(Number(id));
  }
}
