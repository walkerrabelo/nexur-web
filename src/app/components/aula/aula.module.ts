import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AulaComponent } from './aula.component';

@NgModule({
  declarations: [AulaComponent],
  exports: [AulaComponent],
  imports: [
    CommonModule
  ]
})
export class AulaModule { }
