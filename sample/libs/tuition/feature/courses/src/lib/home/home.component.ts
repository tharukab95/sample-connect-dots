import {Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {Observable} from "rxjs";
import {defaultDialogConfig} from '../shared/default-dialog-config';
import {EditCourseDialogComponent} from '../edit-course-dialog/edit-course-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {AppState} from 'apps/tuition/src/app/reducers/index';
import {select, Store} from '@ngrx/store';
import {selectAdvancedCourses, selectBeginnerCourses, selectPromoTotal} from '../+state/courses/courses.selectors';

@Component({
    selector: 'sample-course-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    promoTotal$: Observable<number> | undefined;

    beginnerCourses$: Observable<Course[]> | undefined;

    advancedCourses$: Observable<Course[]> | undefined;


    constructor(
      private dialog: MatDialog,
      private store: Store<AppState>
    ){}

    ngOnInit() {
      this.reload();
    }

  reload() {

    this.beginnerCourses$ = this.store.pipe(select(selectBeginnerCourses));

    this.advancedCourses$ = this.store.pipe(select(selectAdvancedCourses));

    this.promoTotal$ = this.store.pipe(select(selectPromoTotal));

  }

  onAddCourse() {

    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle:"Create Course",
      mode: 'create'
    };

    this.dialog.open(EditCourseDialogComponent, dialogConfig);

  }


}
