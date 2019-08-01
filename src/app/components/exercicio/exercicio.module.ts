import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercicioDragDropItemComponent } from './exercicio-drag-drop-item/exercicio-drag-drop-item.component';
import { MatCardModule, MatRippleModule, MatIconModule, MatTooltipModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ExercicioComponent } from './exercicio.component';
import { ExercicioUsuarioComponent } from './exercicio-usuario/exercicio-usuario.component';
import { ExercicioListaSelecaoComponent } from './exercicio-lista-selecao/exercicio-lista-selecao.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ExercicioDragDropItemComponent,
    ExercicioComponent,
    ExercicioUsuarioComponent,
    ExercicioListaSelecaoComponent
  ],
  exports: [
    ExercicioDragDropItemComponent,
    ExercicioComponent,
    ExercicioUsuarioComponent,
    ExercicioListaSelecaoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatRippleModule,
    MatIconModule,
    MatTooltipModule,
    MatTooltipModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ]
})
export class ExercicioModule { }
