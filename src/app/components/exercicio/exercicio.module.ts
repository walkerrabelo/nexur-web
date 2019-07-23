import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercicioDragDropItemComponent } from './exercicio-drag-drop-item/exercicio-drag-drop-item.component';
import { MatCardModule, MatRippleModule } from '@angular/material';
import { ExercicioComponent } from './exercicio.component';

@NgModule({
  declarations: [ExercicioDragDropItemComponent, ExercicioComponent],
  exports: [
    ExercicioDragDropItemComponent, ExercicioComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatRippleModule
  ]
})
export class ExercicioModule { }
