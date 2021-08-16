import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoreApiService } from './core-api.service';
import { CourseModule } from './course/course.module';
import { AssessmentModule } from './assessment/assessment.module';
import { InstituteModule } from './institute/institute.module';
import { LessonModule } from './lesson/lesson.module';
import { ProfileModule } from './profile/profile.module';
import { SessionModule } from './session/session.module';
import { Course } from './course/course.entity';
import { Lesson } from './lesson/lesson.entity';
import { Connection } from 'typeorm';
@Module({
  providers: [CoreApiService],
  exports: [CoreApiService],
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Dragon@321',
      database: 'tuition_core',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CourseModule,
    AssessmentModule,
    InstituteModule,
    LessonModule,
    ProfileModule,
    SessionModule,
  ],
})
export class CoreApiModule {
  // constructor(private connection: Connection) {
  //   connection.connect();
  //   console.log("MySql connection status: ", connection.isConnected);
  // }
}
