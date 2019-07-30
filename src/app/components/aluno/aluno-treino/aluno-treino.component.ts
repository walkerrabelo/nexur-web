import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlunoTreinoEditComponent } from './aluno-treino-edit/aluno-treino-edit.component';
import { Aluno } from '../../../models/aluno/aluno';
import { AlunoTreino } from '../../../models/aluno/aluno-treino';
import { AlunoTreinoExercicio } from '../../../models/aluno/aluno-treino-exercicio';

@Component({
  selector: 'app-aluno-treino',
  templateUrl: './aluno-treino.component.html',
  styleUrls: ['./aluno-treino.component.css']
})
export class AlunoTreinoComponent implements OnInit {

  @Input()
  treino: AlunoTreino = null;

  expanded = false;
  showHideText = 'Exibir';
  activeTrain = true;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.activeTrain = this.treino.ativo === '1' ? true : false;
  }

  expandExercices() {
    this.expanded = !this.expanded;
    this.showHideText = this.expanded ? 'Ocultar' : 'Exibir';
  }

  activateTrain() {
    this.activeTrain = !this.activeTrain;
    console.log(this.activeTrain);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AlunoTreinoEditComponent, {
      width: '95%',
      height: '95%',
      data: {
        descricao: 'Leg Press Abd Supra Infra Max',
        dataAtivacao: Date.now(),
        dataVencimento: Date.now()
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const descricao = result[0];
        const dataAtivacao = result[0];
        const dataVencimento = result[2];
        console.log('Dados de atualizacao: ');
        console.log(result);
      }
    });
  }

  modificarListaTreino(alunoTreinoExercicio: AlunoTreinoExercicio) {
    console.log('Lista de Exercicio Antigo: ', this.treino.exercicioSeries);

    this.treino.exercicioSeries.forEach((element, index, array) => {
      if (element.id_exercicio_serie === alunoTreinoExercicio.id_exercicio_serie) {
        array[index] = alunoTreinoExercicio;
      }
    });

    console.log('Lista de Exercicio Atual: ', this.treino.exercicioSeries);
  }
}
