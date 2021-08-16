import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, QueryBuilder } from 'typeorm';
import { Lesson } from './lesson.entity';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepository: Repository<Lesson>
  ) {}

  async create(lesson: Lesson): Promise<Lesson> {
    return await this.lessonRepository.save(lesson);
  }

  async findAll(id: number): Promise<Lesson[]> {
    let lessons = await this.lessonRepository
      .createQueryBuilder('lesson')
      .leftJoinAndSelect('lesson.course', 'course')
      .where('lesson.course = :id', { id: id })
      .getMany();
    return lessons;
  }

  findOne(id: number): Promise<Lesson> {
    return this.lessonRepository.findOne(id);
  }

  public async update(id: number, newValue: Lesson): Promise<Lesson | null> {
    const lesson = await this.lessonRepository.findOneOrFail(id);
    if (!lesson.id) {
      // tslint:disable-next-line:no-console
      console.error("Lesson doesn't exist");
    }
    await this.lessonRepository.update(id, newValue);
    return await this.lessonRepository.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.lessonRepository.delete(id);
  }
}