import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../models/model-types';
import { MatDialog } from '@angular/material/dialog';
import { EditCourseDialogComponent } from '../edit-course-dialog/edit-course-dialog.component';
import { defaultDialogConfig } from '../../config/default-dialog-config';

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.scss'],
})
export class CoursesCardListComponent implements OnInit {
  @Input()
  courses: Course[] | undefined;

  selectedCourseUrl = '';

  @Output()
  courseChanged = new EventEmitter();

  currentIndex = -1;
  showPayOptions = false;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  editCourse(course: Course) {
    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle: 'Edit Course',
      course,
      mode: 'update',
    };

    this.dialog
      .open(EditCourseDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.courseChanged.emit());
  }

  onDeleteCourse(course: Course) {}

  toggleShowPayOptions(index: any, buttonClicked: boolean) {
    console.log(index);
    if (this.currentIndex !== -1) {
      this.currentIndex = index;
      return false;
    } else if (this.currentIndex === index && buttonClicked) {
      return false;
    }
    return true;
  }
}
