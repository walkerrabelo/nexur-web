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
import { AlunoCalendario } from '../../../models/aluno/aluno-calendario';

const BORG_COLORS = [
  {
    primary: '#000000',
    secondary: '#696969'
  },
  {
    primary: '#D8EDF2',
    secondary: '#D8EDF2'
  },
  {
    primary: '#85CCC4',
    secondary: '#85CCC4'
  },
  {
    primary: '#B7B1D7',
    secondary: '#B7B1D7'
  },
  {
    primary: '#96B977',
    secondary: '#96B977'
  },
  {
    primary: '#EECD84',
    secondary: '#EECD84'
  },
  {
    primary: '#B5B4D6',
    secondary: '#B5B4D6'
  }
];
const AGENDADOS_COLORS = [
  {
    primary: '#3987AD',
    secondary: '#3987AD'
  },
];
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
  editingMode = false;

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

  openDialogNovaPeriodizacao(): void {
    const dialogRef =
      this.dialog.open(AlunoPeriodizacaoSeriesRepeticoesDialogComponent, {
        width: '300px',
        data: {
          seriesRepeticoes: this.seriesRepeticoes.seriesRepeticoes,
          observacoes: this.seriesRepeticoes.observacoes,
          treino: this.buttonTreinoSelected
        }
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.seriesRepeticoes = result;
        console.log(this.seriesRepeticoes);
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
      this.editing(true);
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
      this.editing(true);
      this.addTreinoAgendadoToDate(this.buttonTreinoSelected, dateSelected);
    }
  }
  editing(activation: boolean) {
    this.editingMode = activation;
  }
  save() {
    this.buttonTreinoSelected = null;
    this.editing(false);
  }

  deleteEvent(event) {
    this.editing(true);
    console.log('Deletando...');
    console.log(event);
    // this.events = this.events.filter(iEvent => iEvent !== event);
  }

  addTreinoAgendadoToDate(treino, date) {
    console.log('Adicionando Agendado: ', treino, date);
    this.events = [
      ...this.events,
      {
        start: startOfDay(date),
        title: treino + ' (' + this.seriesRepeticoes.seriesRepeticoes + ')',
        // Associar Actions Editar e Excluir
        actions: this.actionsEditDelete,
        color: AGENDADOS_COLORS[0],
        meta: {
          incrementsBadgeTotal: true,
          serieRepeticoes: this.seriesRepeticoes,
        }
      }
    ];
  }
  addTreinoRegistradoToDate(alunoCalendario: AlunoCalendario) {
    // console.log('Adicionando Registrado: ', treino, date);
    this.events = [
      ...this.events,
      {
        start: startOfDay(moment(alunoCalendario.start).format()),
        title: alunoCalendario.title +
          (alunoCalendario.tempo && alunoCalendario.tempo != ''  ?
          ' (tempo: ' + alunoCalendario.tempo + ')' : ''),
        color: BORG_COLORS[parseInt(alunoCalendario.borg, 10)],
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
            this.addTreinoRegistradoToDate(alunoCalendario);
          }
        });
      });
  }

  activateDeactivateButton(event) {
    this.sameButton = !this.sameButton;
    if (this.sameButton) {
      this.buttonTreinoSelected = null;
    } else {
      this.openDialogNovaPeriodizacao();
    }
  }
}
