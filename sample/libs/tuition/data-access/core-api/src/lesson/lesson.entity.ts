import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Course } from '../course/course.entity';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ default: null })
  description: string;

  @Column({ default: null })
  duration: string;

  @Column({ default: null })
  courseListIcon: string;

  @Column({ name: 'created_at', default: () => `now()`, nullable: false })
  createdAt: Date;

  @Column({ name: 'updated_at', default: () => 'now()', nullable: false })
  updateTime: Date;

  @ManyToOne(() => Course, (course) => course.lessons, {
    primary: true,
    cascade: ['insert'],
  })
  course: Course;

  constructor(partial: Partial<Lesson>) {
    Object.assign(this, partial);
  }
}
