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
import { AlunoCalendarioInsert } from '../../../models/aluno/aluno-calendario-insert';
import { AlunoCalendarioInsertionService } from '../../../services/aluno/aluno-calendario-insertion.service';

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
  idSerieSelected = null;
  sameButton = true;
  subscription: Subscription;
  seriesRepeticoes = {seriesRepeticoes: '', observacoes: ''};
  editingMode = false;

  alunoCalendarioInsert: AlunoCalendarioInsert;
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
    private alunoCalendarioInsertionService: AlunoCalendarioInsertionService,
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
    console.log('Button Selected: ');
    console.log(selected.value.descricao);
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
      const alunoCalendario = new AlunoCalendario();
      alunoCalendario.title = this.buttonTreinoSelected.descricao;
      alunoCalendario.id_serie = this.buttonTreinoSelected.id_serie;
      alunoCalendario.start = moment(dateSelected).format();;
      alunoCalendario.ser = this.seriesRepeticoes.seriesRepeticoes;
      alunoCalendario.obs = this.seriesRepeticoes.observacoes;
      alunoCalendario.tipo = 'p';
      this.addTreinoAgendadoToDate(alunoCalendario);
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
      const alunoCalendario = new AlunoCalendario();
      alunoCalendario.title = this.buttonTreinoSelected.descricao;
      alunoCalendario.id_serie = this.buttonTreinoSelected.id_serie;
      alunoCalendario.start = moment(dateSelected).format();
      alunoCalendario.ser = this.seriesRepeticoes.seriesRepeticoes;
      alunoCalendario.obs = this.seriesRepeticoes.observacoes;
      alunoCalendario.tipo = 'p';
      this.addTreinoAgendadoToDate(alunoCalendario);
    }
  }
  editing(activation: boolean) {
    this.editingMode = activation;
  }
  save() {
    this.buttonTreinoSelected = null;
    this.fillData();
    this.subscription = this.alunoCalendarioInsertionService
    .create(this.alunoCalendarioInsert).subscribe(alunoCalendario => {
      this.editing(false);
      console.log('Salvou !');
    });
  }

  deleteEvent(event) {
    this.editing(true);
    console.log('Deletando...');
    console.log(event);
    // this.events = this.events.filter(iEvent => iEvent !== event);
  }

  addTreinoAgendadoToDate(alunoCalendario: AlunoCalendario) {
    // console.log('Adicionando Agendado: ', treino, date);
    this.events = [
      ...this.events,
      {
        start: startOfDay(alunoCalendario.start),
        title: alunoCalendario.title + ' (' + alunoCalendario.ser + ')',
        color: AGENDADOS_COLORS[0],
        meta: {
          incrementsBadgeTotal: true,
          alunoCalendario
        }
      }
    ];
  }
  addTreinoRegistradoToDate(alunoCalendario: AlunoCalendario) {
    // console.log('Adicionando Registrado: ', treino, date);
    this.events = [
      ...this.events,
      {
        start: startOfDay(alunoCalendario.start),
        title: alunoCalendario.title +
          (alunoCalendario.tempo && alunoCalendario.tempo != ''  ?
          ' (tempo: ' + alunoCalendario.tempo + ')' : ''),
        color: BORG_COLORS[parseInt(alunoCalendario.borg, 10)],
        meta: {
          incrementsBadgeTotal: true,
          alunoCalendario
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
            this.addTreinoAgendadoToDate(alunoCalendario);
          } else {
            this.addTreinoRegistradoToDate(alunoCalendario);
          }
        });
      });
  }

  fillData() {
    this.alunoCalendarioInsert = new AlunoCalendarioInsert();
    this.alunoCalendarioInsert.events = [];
    this.alunoCalendarioInsert.mesos = [];
    this.events.forEach(event => {
      const tipo = event.meta.alunoCalendario.tipo;
      const id_serie = event.meta.alunoCalendario.id_serie;
      const data = event.meta.alunoCalendario.start;
      const ser = event.meta.alunoCalendario.ser;
      const obs = event.meta.alunoCalendario.obs;
      this.alunoCalendarioInsert.id_aluno = this.idAluno;
      this.alunoCalendarioInsert.events.push(
        {tipo, id_serie, data, ser, obs}
      );
    });
    console.log(this.alunoCalendarioInsert);
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
