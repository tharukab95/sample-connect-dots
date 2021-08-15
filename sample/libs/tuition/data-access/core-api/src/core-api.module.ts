import { Module } from '@nestjs/common';
import { CoreApiService } from './core-api.service';
import { CourseController } from './course/course.controller';
import { LessonController } from './lesson/lesson.controller';
import { ProfileController } from './profile/profile.controller';
import { AssessmentController } from './assessment/assessment.controller';
import { ClassController } from './class/class.controller';
import { InstituteController } from './institute/institute.controller';
import { SessionController } from './session/session.controller';
import { CourseService } from './course/course.service';
import { LessonService } from './lesson/lesson.service';
import { InstituteService } from './institute/institute.service';
import { ClassService } from './class/class.service';
import { ProfileService } from './profile/profile.service';
import { SessionService } from './session/session.service';
import { AssessmentService } from './assessment/assessment.service';
import { CourseModule } from './course/course.module';
import { AssessmentModule } from './assessment/assessment.module';
import { ClassModule } from './class/class.module';
import { InstituteModule } from './institute/institute.module';
import { LessonModule } from './lesson/lesson.module';
import { ProfileModule } from './profile/profile.module';
import { SessionModule } from './session/session.module';

@Module({
  providers: [CoreApiService, CourseService, LessonService, InstituteService, ClassService, ProfileService, SessionService, AssessmentService],
  exports: [CoreApiService],
  controllers: [CourseController, LessonController, ProfileController, AssessmentController, ClassController, InstituteController, SessionController],
  imports: [CourseModule, AssessmentModule, ClassModule, InstituteModule, LessonModule, ProfileModule, SessionModule],
})
export class CoreApiModule {}
