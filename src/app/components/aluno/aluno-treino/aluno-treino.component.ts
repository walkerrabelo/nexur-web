import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlunoTreinoEditComponent } from './aluno-treino-edit/aluno-treino-edit.component';
import { AlunoTreino } from '../../../models/aluno/aluno-treino';
import { AlunoTreinoExercicio } from '../../../models/aluno/aluno-treino-exercicio';
import { AlunoTreinoService } from '../../../services/aluno/aluno-treino.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-treino',
  templateUrl: './aluno-treino.component.html',
  styleUrls: ['./aluno-treino.component.css']
})
export class AlunoTreinoComponent implements OnInit, OnDestroy {


  @Input()
  treino: AlunoTreino = null;

  expanded = false;
  showHideText = 'Exibir';
  activeTrain = true;

  subscritptionRemove: Subscription;

  constructor(
    private dialog: MatDialog,
    private alunoTreinoService: AlunoTreinoService) { }

  ngOnInit() {
    this.activeTrain = this.treino.ativo === '1' ? true : false;
  }

  ngOnDestroy(): void {
    if (this.subscritptionRemove) {
      this.subscritptionRemove.unsubscribe();
    }
  }
  expandExercices() {
    this.expanded = !this.expanded;
    this.showHideText = this.expanded ? 'Ocultar' : 'Exibir';
  }

  activateTrain() {
    this.activeTrain = !this.activeTrain;
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
        console.log(result);
      }
    });
  }

  modificarListaTreino(event) {
    console.log('Salvando o treino do Aluno...');

    const alunoTreinoExercicio = event.alunoTreinoExercicio;
    const operation = event.operation;

    let indexToChange = -1;

    this.treino.exercicioSeries.forEach((element, index, array) => {
      if (element.id_exercicio_serie === alunoTreinoExercicio.id_exercicio_serie) {
        indexToChange = index;
      }
    });
    if (operation === 'update' && indexToChange >= 0) {
      this.treino.exercicioSeries.splice(indexToChange, 1, alunoTreinoExercicio);
      console.log('Atualizando...');
    }
    if (operation === 'delete' && indexToChange >= 0) {
      this.treino.exercicioSeries.splice(indexToChange, 1);
      console.log('Removendo...');
    }
    this.subscritptionRemove =
      this.alunoTreinoService.save(this.treino).subscribe(treino => this.treino = treino);
  }

}
