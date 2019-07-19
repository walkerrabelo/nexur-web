import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoNutricaoComponent } from './aluno-nutricao.component';

@NgModule({
  declarations: [AlunoNutricaoComponent],
  exports: [AlunoNutricaoComponent],
  imports: [
    CommonModule
  ]
})
export class AlunoNutricaoModule { }
