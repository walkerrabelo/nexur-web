import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntervalDatePipe } from './interval-date.pipe';

@NgModule({
  declarations: [IntervalDatePipe],
  exports: [IntervalDatePipe],
  imports: [
    CommonModule
  ]
})
export class IntervalDateModule { }
