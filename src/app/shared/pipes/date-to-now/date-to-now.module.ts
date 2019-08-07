import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateToNowPipe } from './date-to-now.pipe';

@NgModule({
  declarations: [DateToNowPipe],
  exports: [DateToNowPipe],
  imports: [
    CommonModule
  ]
})
export class DateToNowModule { }
