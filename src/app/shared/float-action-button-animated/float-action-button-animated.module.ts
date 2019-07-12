import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatActionButtonAnimatedComponent } from './float-action-button-animated.component';
import { MatIconModule, MatButtonModule, MatTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FloatActionButtonAnimatedComponent],
  exports: [
    FloatActionButtonAnimatedComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    RouterModule
  ],

})
export class FloatActionButtonAnimatedModule { }
