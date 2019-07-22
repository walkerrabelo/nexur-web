import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoPeriodizacaoComponent } from './aluno-periodizacao.component';

@NgModule({
  declarations: [AlunoPeriodizacaoComponent],
  exports: [AlunoPeriodizacaoComponent],
  imports: [
    CommonModule
  ]
})
export class AlunoPeriodizacaoModule { }
