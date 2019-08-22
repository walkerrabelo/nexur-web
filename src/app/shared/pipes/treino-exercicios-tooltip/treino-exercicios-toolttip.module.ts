import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreinoExerciciosTooltipPipe } from './treino-exercicios-tooltip.pipe';

@NgModule({
  declarations: [TreinoExerciciosTooltipPipe],
  exports: [TreinoExerciciosTooltipPipe],
  imports: [
    CommonModule
  ]
})
export class TreinoExerciciosToolttipModule { }
