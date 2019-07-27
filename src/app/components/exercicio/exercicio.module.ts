import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercicioDragDropItemComponent } from './exercicio-drag-drop-item/exercicio-drag-drop-item.component';
import { MatCardModule, MatRippleModule } from '@angular/material';
import { ExercicioComponent } from './exercicio.component';
import { ExercicioUsuarioComponent } from './exercicio-usuario/exercicio-usuario.component';

@NgModule({
  declarations: [ExercicioDragDropItemComponent, ExercicioComponent, ExercicioUsuarioComponent],
  exports: [
    ExercicioDragDropItemComponent, ExercicioComponent, ExercicioUsuarioComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatRippleModule
  ]
})
export class ExercicioModule { }
