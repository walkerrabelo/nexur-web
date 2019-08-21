import { Component, OnInit, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CalendarEventAction, CalendarEvent, CalendarMonthViewDay, CalendarView } from 'angular-calendar';
import { AlunoCalendarioService } from '../../../services/aluno/aluno-calendario.service';
import * as moment from 'moment/moment';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subscription } from 'rxjs';
import { AlunoTreino } from '../../../models/aluno/aluno-treino';
import { MatDialog } from '@angular/material';
import { AlunoPeriodizacaoSeriesRepeticoesDialogComponent } from './aluno-periodizacao-series-repeticoes-dialog/aluno-periodizacao-series-repeticoes-dialog.component';

const colors: any = {
  white: {
    primary: '#FFFFFF',
    secondary: '#FFFFFF'
  },
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
@Component({
  selector: 'app-aluno-periodizacao',
  templateUrl: './aluno-periodizacao.component.html',
  styleUrls: ['./aluno-periodizacao.component.css']
})
export class AlunoPeriodizacaoComponent implements OnInit, OnDestroy {

  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  viewDateNext: Date = new Date();
  activeDayIsOpen = false;
  activeDayIsOpenNextMonth = false;
  buttonTreinoSelected = null;
  sameButton = true;
  subscription: Subscription;
  seriesRepeticoes = {seriesRepeticoes: '', observacoes: ''};

  @Input()
  alunoTreinoList: AlunoTreino[];
  @Input()
  idAluno: string;

  actionsEditDelete: CalendarEventAction[] = [
    {
      label: '',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        console.log(event);
      }
    }
  ];
  // Actions Editar e Excluir Treino

  events: CalendarEvent[] = [];

  constructor(
    private dialog: MatDialog,
    private alunoCalendarioService: AlunoCalendarioService) {
      this.viewDateNext.setMonth(this.viewDate.getMonth() + 1);
     }

  openDialogNovoExercicio(): void {
    const dialogRef =
      this.dialog.open(AlunoPeriodizacaoSeriesRepeticoesDialogComponent, {
        width: '300px',
        data: this.seriesRepeticoes
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.seriesRepeticoes = result;
        // console.table(this.seriesRepeticoes);
      }
    });
  }

  ngOnInit() {
    this.loadAlunoCalendario();
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  nextMonth() {
    this.viewDateNext = new Date(this.viewDate.toDateString());
    this.viewDateNext.setMonth(this.viewDate.getMonth() + 1);
    this.activeDayIsOpen = false;
    this.activeDayIsOpenNextMonth = false;
  }
  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
    this.activeDayIsOpenNextMonth = false;
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      day.badgeTotal = day.events.filter(
        event => event.meta.incrementsBadgeTotal
      ).length;
    });
  }

  changeTreino(selected) {
    this.activeDayIsOpen = false;
    console.log('Button Selected: ', this.buttonTreinoSelected);
    console.log(selected.value);
    this.sameButton = true;
  }

  dayClicked(event) {
    const dateSelected = event.day.date;
    this.viewDate = dateSelected;
    if (!this.buttonTreinoSelected) {
      this.activeDayIsOpen = !this.activeDayIsOpen;
      this.activeDayIsOpenNextMonth = false;
    } else {
      console.log('Adicionando o Treino: ', this.buttonTreinoSelected);
      console.log('No dia: ', dateSelected);
      this.addTreinoAgendadoToDate(this.buttonTreinoSelected, dateSelected);
    }
  }
  dayClickedNextMonth(event) {
    const dateSelected = event.day.date;
    this.viewDateNext = dateSelected;
    if (!this.buttonTreinoSelected) {
      this.activeDayIsOpenNextMonth = !this.activeDayIsOpenNextMonth;
      this.activeDayIsOpen = false;
    } else {
      console.log('Adicionando o Treino: ', this.buttonTreinoSelected);
      console.log('No dia: ', dateSelected);
      this.addTreinoAgendadoToDate(this.buttonTreinoSelected, dateSelected);
    }
  }
  save() {
    this.buttonTreinoSelected = null;
    console.log('Salvou !');
  }

  deleteEvent(event) {
    console.log('Deletando...');
    this.events = this.events.filter(iEvent => iEvent !== event);
  }

  addTreinoAgendadoToDate(treino, date) {
    console.log('Adicionando Agendado: ', treino, date);
    this.events = [
      ...this.events,
      {
        start: startOfDay(date),
        title: treino,
        // Associar Actions Editar e Excluir
        actions: this.actionsEditDelete,
        color: colors.blue,
        meta: {
          incrementsBadgeTotal: true,
          serieRepeticoes: this.seriesRepeticoes,
        }
      }
    ];
  }
  addTreinoRegistradoToDate(treino, date) {
    console.log('Adicionando Registrado: ', treino, date);
    this.events = [
      ...this.events,
      {
        start: startOfDay(date),
        title: treino,
        actions: this.actionsEditDelete,
        color: colors.red,
        meta: {
          incrementsBadgeTotal: true,
          serieRepeticoes: this.seriesRepeticoes,
        }
      }
    ];
  }

  loadAlunoCalendario() {
    this.subscription = this.alunoCalendarioService
    .getCalendario(this.idAluno).subscribe(
      list => {
        console.log('Treinos Calendario: ');
        console.table(list);
        list.forEach(alunoCalendario => {
          const date = moment(alunoCalendario.start).format();
          const description = alunoCalendario.title;
          if (alunoCalendario.tipo == 'p') {
            this.addTreinoAgendadoToDate(description, date);
          } else {
            this.addTreinoRegistradoToDate(description, date);
          }
        });
      });
  }

  activateDeactivateButton(event) {
    this.sameButton = !this.sameButton;
    if (this.sameButton) {
      this.buttonTreinoSelected = null;
    } else {
      this.openDialogNovoExercicio();
    }
  }
}
