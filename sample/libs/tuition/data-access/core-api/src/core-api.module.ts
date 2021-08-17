import { MiddlewareConsumer, Module } from '@nestjs/common';
import { CoreApiService } from './core-api.service';
import { CourseModule } from './course/course.module';
import { AssessmentModule } from './assessment/assessment.module';
import { InstituteModule } from './institute/institute.module';
import { LessonModule } from './lesson/lesson.module';
import { ProfileModule } from './profile/profile.module';
import { SessionModule } from './session/session.module';
import { GetUserMiddleware } from '@tuition/api-utility';
@Module({
  providers: [CoreApiService],
  exports: [CoreApiService],
  imports: [
    CourseModule,
    AssessmentModule,
    InstituteModule,
    LessonModule,
    ProfileModule,
    SessionModule,
  ],
})
export class CoreApiModule {
  // configure(consumer: MiddlewareConsumer): void {
  //   consumer.apply(GetUserMiddleware).forRoutes(CourseModule, LessonModule);
  // }
}
