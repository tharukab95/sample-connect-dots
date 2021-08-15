import { Module } from '@nestjs/common';
import { CoreApiService } from './core-api.service';
import { CourseModule } from './course/course.module';
import { AssessmentModule } from './assessment/assessment.module';
import { ClassModule } from './class/class.module';
import { InstituteModule } from './institute/institute.module';
import { LessonModule } from './lesson/lesson.module';
import { ProfileModule } from './profile/profile.module';
import { SessionModule } from './session/session.module';

@Module({
  providers: [CoreApiService],
  exports: [CoreApiService],
  controllers: [],
  imports: [CourseModule, AssessmentModule, ClassModule, InstituteModule, LessonModule, ProfileModule, SessionModule],
})
export class CoreApiModule {}
