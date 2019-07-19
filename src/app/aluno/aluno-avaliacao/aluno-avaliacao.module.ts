import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoAvaliacaoComponent } from './aluno-avaliacao.component';

@NgModule({
  declarations: [AlunoAvaliacaoComponent],
  exports: [AlunoAvaliacaoComponent],
  imports: [
    CommonModule
  ]
})
export class AlunoAvaliacaoModule { }
