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
  @ViewChild('previousMonthView', {static: false})
  previousMonthView: ElementRef;
  @ViewChild('actualMonthView', {static: false})
  actualMonthView: ElementRef;
  @ViewChild('nextMonthView', {static: false})
  nextMonthView: ElementRef;

  buttonTreinoSelected = null;

  subscription: Subscription;

  @Input()
  alunoTreinoList: AlunoTreino[];
  @Input()
  idAluno: string;

  actionsEditDelete: CalendarEventAction[] = [
    {
      label: '',
      onClick: (): void => {}
    }
  ];
  // Actions Editar e Excluir Treino

  events: CalendarEvent[] = [];

  constructor(
    private alunoCalendarioService: AlunoCalendarioService) {
      this.viewDateNext.setMonth(this.viewDate.getMonth() + 1);
     }

  ngOnInit() {
    this.loadAlunoCalendario();
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  previousMonth() {
    this.previousMonthView.nativeElement.click();
    this.closeOpenMonthViewDay();
  }
  actualMonth() {
    this.actualMonthView.nativeElement.click();
    this.closeOpenMonthViewDay();
  }
  nextMonth() {
    this.nextMonthView.nativeElement.click();
    this.closeOpenMonthViewDay();
  }
  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      day.badgeTotal = day.events.filter(
        event => event.meta.incrementsBadgeTotal
      ).length;
    });
  }

  selectTreino(selected) {
    this.activeDayIsOpen = false;
    console.log(selected.value);
  }

  dayClicked(event) {
    const dateSelected = event.day.date;
    this.viewDate = dateSelected;
    if (!this.buttonTreinoSelected) {
      this.activeDayIsOpen = !this.activeDayIsOpen;
    } else {
      console.log('Adicionando o Treino: ', this.buttonTreinoSelected);
      console.log('No dia: ', dateSelected);
      this.addTreinoAgendadoToDate(this.buttonTreinoSelected, dateSelected);
    }
  }
  save() {
    // this.buttonTreinoSelected.checked = false;
    this.buttonTreinoSelected = null;
    console.log('Salvou !');
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
          novoDado: treino + ' - DADOS DETALHADOS',
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
          novoDado: treino,
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
}
