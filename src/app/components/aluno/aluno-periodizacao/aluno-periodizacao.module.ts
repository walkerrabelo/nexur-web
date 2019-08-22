import { CalendarModule } from 'angular-calendar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoPeriodizacaoComponent } from './aluno-periodizacao.component';
import { MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule,
  MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonToggleModule, MatGridListModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlunoCalendarioService } from '../../../services/aluno/aluno-calendario.service';
// tslint:disable-next-line: max-line-length
import { AlunoPeriodizacaoSeriesRepeticoesDialogComponent } from './aluno-periodizacao-series-repeticoes-dialog/aluno-periodizacao-series-repeticoes-dialog.component';
import { TreinoExerciciosToolttipModule } from '../../../shared/pipes/treino-exercicios-tooltip/treino-exercicios-toolttip.module';

@NgModule({
  entryComponents: [AlunoPeriodizacaoSeriesRepeticoesDialogComponent],
  declarations: [
    AlunoPeriodizacaoComponent,
    AlunoPeriodizacaoSeriesRepeticoesDialogComponent],
  providers: [AlunoCalendarioService],
  exports: [AlunoPeriodizacaoComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    MatButtonModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    TreinoExerciciosToolttipModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class AlunoPeriodizacaoModule { }
