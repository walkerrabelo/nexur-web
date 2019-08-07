import { AlunoTreinoEditarComponent } from './aluno-treino-editar/aluno-treino-editar.component';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlunoTreino } from '../../../models/aluno/aluno-treino';
import { AlunoTreinoExercicio } from '../../../models/aluno/aluno-treino-exercicio';
import { AlunoTreinoService } from '../../../services/aluno/aluno-treino.service';
import { Subscription } from 'rxjs';
// tslint:disable-next-line: import-spacing
import { AlunoTreinoExercicioNovoComponent }
  from './aluno-treino-exercicio/aluno-treino-exercicio-novo/aluno-treino-exercicio-novo.component';

@Component({
  selector: 'app-aluno-treino',
  templateUrl: './aluno-treino.component.html',
  styleUrls: ['./aluno-treino.component.css']
})
export class AlunoTreinoComponent implements OnInit, OnDestroy {


  @Input()
  alunoTreino: AlunoTreino = null;

  expanded = false;
  showHideText = 'Exibir';
  activeTrain = true;

  buttonSaveText = false;
  editingMode = false;

  subscritption: Subscription;

  constructor(
    private dialog: MatDialog,
    private alunoTreinoService: AlunoTreinoService) {}

  ngOnInit() {
    console.log('Ativo? : ', this.alunoTreino.ativo);
    this.activeTrain = this.alunoTreino.ativo === '1' ? true : false;
    console.log('ActiveButton: ', this.activeTrain);
  }

  ngOnDestroy(): void {
    if (this.subscritption) {
      this.subscritption.unsubscribe();
    }
  }
  expandExercices() {
    this.expanded = !this.expanded;
    this.showHideText = this.expanded ? 'Ocultar' : 'Exibir';
  }

  activateTrain() {
    this.activeTrain = !this.activeTrain;
    this.alunoTreino.ativo = this.activateTrain ? '1' : '0';
    this.editing(true);
  }
  openDialogNovoExercicio(): void {
    const dialogRef = this.dialog.open(AlunoTreinoExercicioNovoComponent, {
      width: '95%',
      height: '95%',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.novoExercicio(result);
      }
    });
  }
  openDialogEditarTreino(): void {
    const dialogRef = this.dialog.open(AlunoTreinoEditarComponent, {
      width: '350px',
      data: this.alunoTreino
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.editaDadosTreino(result);
      }
    });
  }

  editaDadosTreino(alunoTreinoNovo: AlunoTreino) {
    this.alunoTreino = alunoTreinoNovo;
    this.editing(true);
  }

  novoExercicio(novoExercicio: AlunoTreinoExercicio) {
    this.alunoTreino.exercicioSeries.push(novoExercicio);
    this.editing(true);
  }

  modificarExercicio(event) {
    const alunoTreinoExercicio = event.alunoTreinoExercicio;
    const operation = event.operation;
    let indexToChange = -1;
    this.alunoTreino.exercicioSeries.forEach((element, index) => {
      if (element.id_exercicio_serie === alunoTreinoExercicio.id_exercicio_serie) {
        indexToChange = index;
      }
    });
    if (operation === 'update' && indexToChange >= 0) {
      this.alunoTreino.exercicioSeries.splice(indexToChange, 1, alunoTreinoExercicio);
    }
    if (operation === 'delete' && indexToChange >= 0) {
      this.alunoTreino.exercicioSeries.splice(indexToChange, 1);
    }
    this.editing(true);
  }

  editing(mode: boolean) {
    this.editingMode = mode;
  }

  save() {
    this.editing(false);
    this.buttonSaveText = true;
    this.subscritption =
      this.alunoTreinoService.save(this.alunoTreino).subscribe(
        treino => {
          this.alunoTreino = treino;
          this.buttonSaveText = false;
        }
      );
  }
}
