import { Component, OnInit, Input } from '@angular/core';
import { CalendarEventAction, CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { MatDialog } from '@angular/material';
import { Aluno } from '../../../models/aluno/aluno';
import { AlunoPeriodizacaoModalSelecaoTreinoComponent } from './aluno-periodizacao-modal-selecao-treino/aluno-periodizacao-modal-selecao-treino.component';
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

  @Input()
  aluno: Aluno;

  actionNew: CalendarEventAction[] = [
    {
      label: 'Adicionar Treino',
      onClick: (): void => {
        this.openDialog();
      }
    }
  ];

  actionsEditDelete: CalendarEventAction[] = [
    {
      label: '',
      onClick: (): void => {}
    }
  ];
  // Actions Editar e Excluir Treino


  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: '',
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

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AlunoPeriodizacaoModalSelecaoTreinoComponent, {
      width: '350px',
      height: '200px',
      data: this.aluno.series
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Treino Selecionado: ', result);
      }
    });
  }

  beforeMonthViewRender({ body }: { body: CalendarMonthViewDay[] }): void {
    body.forEach(day => {
      day.badgeTotal = day.events.filter(
        event => event.meta.incrementsBadgeTotal
      ).length;
    });
  }

}
