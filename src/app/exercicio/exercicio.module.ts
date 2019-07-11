import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercicioDragDropItemComponent } from './exercicio-drag-drop-item/exercicio-drag-drop-item.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [ExercicioDragDropItemComponent],
  exports: [
    ExercicioDragDropItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class ExercicioModule { }
