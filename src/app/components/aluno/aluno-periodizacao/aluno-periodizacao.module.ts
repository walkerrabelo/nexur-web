import { CalendarModule } from 'angular-calendar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoPeriodizacaoComponent } from './aluno-periodizacao.component';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [AlunoPeriodizacaoComponent],
  exports: [AlunoPeriodizacaoComponent],
  imports: [
    CommonModule,
    CalendarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AlunoPeriodizacaoModule { }
