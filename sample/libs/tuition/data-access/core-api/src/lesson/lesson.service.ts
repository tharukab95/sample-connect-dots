import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private coursesRepository: Repository<Lesson>
  ) {}

  findAll(): Promise<Lesson[]> {
    return this.coursesRepository.find();
  }

  findOne(id: string): Promise<Lesson> {
    return this.coursesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.coursesRepository.delete(id);
  }
}
