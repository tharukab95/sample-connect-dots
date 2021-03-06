import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Course} from '../model/course';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {AppState} from 'apps/tuition/src/app/reducers/index';
import {Store} from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {courseUpdated} from '../+state/courses/courses.actions';

@Component({
  selector: 'sample-course-dialog',
  templateUrl: './edit-course-dialog.component.html',
  styleUrls: ['./edit-course-dialog.component.scss']
})
export class EditCourseDialogComponent {

  form: FormGroup | undefined;

  dialogTitle: string;

  course: Course | undefined | null;

  mode: 'create' | 'update';

  loading$?:Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditCourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data:any,
    private store: Store<AppState>) {

    this.dialogTitle = data.dialogTitle;
    this.course = data.course;
    this.mode = data.mode;

    const formControls = {
      description: ['', Validators.required],
      category: ['', Validators.required],
      longDescription: ['', Validators.required],
      promo: ['', []]
    };

    if (this.mode == 'update') {
      this.form = this.fb.group(formControls);
      this.form.patchValue({...data.course});
    }
    else if (this.mode == 'create') {
      this.form = this.fb.group({
        ...formControls,
        url: ['', Validators.required],
        iconUrl: ['', Validators.required]
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  onSave() {

    const course: Course = {
      ...this.course,
      ...this.form?.value
    };

    const update: Update<Course> = {
      id: course.id,
      changes: course
    };

    this.store.dispatch(courseUpdated({update}));

    this.dialogRef.close();


  }


}
