import { CalendarModule } from 'angular-calendar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoPeriodizacaoComponent } from './aluno-periodizacao.component';
import { MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { AlunoPeriodizacaoModalSelecaoTreinoComponent } from './aluno-periodizacao-modal-selecao-treino/aluno-periodizacao-modal-selecao-treino.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  entryComponents: [
    AlunoPeriodizacaoModalSelecaoTreinoComponent],
  declarations: [
    AlunoPeriodizacaoComponent,
    AlunoPeriodizacaoModalSelecaoTreinoComponent],
  exports: [AlunoPeriodizacaoComponent],
  imports: [
    CommonModule,
    CalendarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class AlunoPeriodizacaoModule { }
