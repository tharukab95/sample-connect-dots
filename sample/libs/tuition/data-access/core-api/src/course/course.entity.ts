import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Lesson } from '../lesson/lesson.entity';

export type CourseCategoryTypes = 'beginner' | 'intermediate' | 'advance';

@Entity()
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @PrimaryGeneratedColumn()
  seqNo: number;

  @Column()
  url: string;

  @Column()
  iconUrl: string;

  @Column()
  courseListIcon: string;

  @Column()
  longDescription: string;

  @Column({
    type: 'enum',
    enum: ['beginner', 'intermediate', 'advance'],
    default: 'beginner',
  })
  category: CourseCategoryTypes;

  @Column()
  lessonsCount: number;

  @Column()
  promo: boolean;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @OneToMany((type) => Lesson, (lesson) => lesson.course)
  lessons: Lesson[];
}
