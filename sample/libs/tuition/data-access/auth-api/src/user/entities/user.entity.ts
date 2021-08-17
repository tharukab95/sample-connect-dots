import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export type UserRoles = 'UNREGISTERED' | 'STUDENT' | 'ADMIN' | 'TUTOR';

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
    enum: ['UNREGISTERED', 'STUDENT', 'ADMIN', 'TUTOR'],
    default: 'UNREGISTERED',
  })
  role: UserRoles;

  @Column({ default: true })
  isActive: boolean;
}
