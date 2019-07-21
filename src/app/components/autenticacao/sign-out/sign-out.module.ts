import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignOutComponent } from './sign-out.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [SignOutComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class SignOutModule { }
