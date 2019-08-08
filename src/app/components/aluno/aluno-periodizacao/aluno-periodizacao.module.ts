import { CalendarModule } from 'angular-calendar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoPeriodizacaoComponent } from './aluno-periodizacao.component';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { AlunoPeriodizacaoModalSelecaoTreinoComponent } from './aluno-periodizacao-modal-selecao-treino/aluno-periodizacao-modal-selecao-treino.component';

@NgModule({
  declarations: [AlunoPeriodizacaoComponent, AlunoPeriodizacaoModalSelecaoTreinoComponent],
  exports: [AlunoPeriodizacaoComponent],
  imports: [
    CommonModule,
    CalendarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AlunoPeriodizacaoModule { }
