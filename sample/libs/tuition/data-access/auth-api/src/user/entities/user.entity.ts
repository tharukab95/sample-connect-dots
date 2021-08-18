import * as bcrypt from 'bcrypt';
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

export type UserType = 'UNREGISTERED' | 'STUDENT' | 'ADMIN' | 'TUTOR';


@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  username: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  password: string;

  @BeforeInsert() async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @Column({
    type: 'enum',
    enum: ['UNREGISTERED', 'STUDENT', 'ADMIN', 'TUTOR'],
    default: 'UNREGISTERED',
  })
  role: UserType;

  @Column({ default: true })
  isActive: boolean;
}
