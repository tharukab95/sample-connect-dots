import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Lesson } from '../lesson/lesson.entity';

export type CourseCategoryTypes = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';

@Entity()
export class Course {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  url: string;

  @Column()
  iconUrl: string;

  @Column({ default: '' })
  courseListIcon: string;

  @Column()
  description: string;

  @Column()
  longDescription: string;

  @Column({
    type: 'enum',
    enum: ['BEGINNER', 'INTERMEDIATE', 'ADVANCED'],
    default: 'beginner',
  })
  category: CourseCategoryTypes;

  @Column({ default: false })
  promo: boolean;

  @Column({ name: 'created_at', default: () => `now()`, nullable: false })
  createdAt: Date;

  @Column({ name: 'updated_at', default: () => 'now()', nullable: false })
  updateTime: Date;

  @OneToMany((type) => Lesson, (lesson) => lesson.course, {
    primary: true,
    cascade: ['insert'],
  })
  lessons: Lesson[];

  constructor(partial: Partial<Course>) {
    Object.assign(this, partial);
  }
}
