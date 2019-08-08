import { Component, OnInit } from '@angular/core';
import { CalendarEventAction, CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
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
export class AlunoPeriodizacaoComponent implements OnInit {

  viewDate: Date = new Date();
  activeDayIsOpen = true;

  actionNew: CalendarEventAction[] = [
    {
      label: '',
      onClick: (): void => {
        this.addTreino();
      }
    }
  ];

  // Actions Editar e Excluir Treino


  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'Adicionar Treino',
      actions: this.actionNew,
      color: colors.white,
      meta: {
        incrementsBadgeTotal: false,
      }
    },
    {
      start: startOfDay(new Date()),
      title: 'TREINO REAL',
      // Associar Actions Editar e Excluir
      actions: this.actionNew,
      color: colors.blue,
      meta: {
        incrementsBadgeTotal: true,
        novoDado: 'DADO 01',
        novoDado2: 'DADO 02'
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      day.badgeTotal = day.events.filter(
        event => event.meta.incrementsBadgeTotal
      ).length;
    });
  }

  addTreino() {
    console.log('Adicionar Treino...');
  }

}
