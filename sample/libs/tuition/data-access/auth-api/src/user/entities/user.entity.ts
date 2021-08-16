import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export type UserRoles = 'unregistered' | 'student' | 'institute_admin' | 'institute_manager' | 'tutor';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: [
      'unregistered',
      'student',
      'institute_admin',
      'institute_manager',
      'tutor',
    ],
    default: 'unregistered',
  })
  role: UserRoles;
}
