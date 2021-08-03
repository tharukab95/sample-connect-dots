import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

export const sharedDataAccessRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
})
export class SharedDataAccessModule {}
