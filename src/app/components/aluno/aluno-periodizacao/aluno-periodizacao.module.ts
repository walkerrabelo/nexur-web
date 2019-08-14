import { CalendarModule } from 'angular-calendar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoPeriodizacaoComponent } from './aluno-periodizacao.component';
import { MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonToggleModule } from '@angular/material';
import { AlunoPeriodizacaoModalSelecaoTreinoComponent } from './aluno-periodizacao-modal-selecao-treino/aluno-periodizacao-modal-selecao-treino.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlunoCalendarioService } from '../../../services/aluno/aluno-calendario.service';

@NgModule({
  entryComponents: [
    AlunoPeriodizacaoModalSelecaoTreinoComponent],
  declarations: [
    AlunoPeriodizacaoComponent,
    AlunoPeriodizacaoModalSelecaoTreinoComponent ],
  providers: [AlunoCalendarioService],
  exports: [AlunoPeriodizacaoComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    MatButtonModule,
    MatButtonToggleModule,
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
