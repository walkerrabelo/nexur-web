import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoTreinoExercicioResumoDadosPipe } from './aluno-treino-exercicio-resumo-dados.pipe';

@NgModule({
  declarations: [AlunoTreinoExercicioResumoDadosPipe],
  exports: [AlunoTreinoExercicioResumoDadosPipe],
  imports: [
    CommonModule
  ]
})
export class AlunoTreinoExercicioResumoDadosModule { }
