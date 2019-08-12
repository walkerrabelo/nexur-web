import { MatDialog } from '@angular/material';
import { AlunoTreinoExercicioDialogFormComponent } from './aluno-treino-exercicio-dialog-form/aluno-treino-exercicio-dialog-form.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AlunoTreinoExercicio } from '../../../../models/aluno/aluno-treino-exercicio';
import { environment } from 'src/environments/environment';
import { AlunoTreinoExercicioService } from '../../../../services/aluno/aluno-treino-exercicio.service';
import { compareAlunoTreinoExercicio } from 'src/app/shared/util/aluno-treino-util';

@Component({
  selector: 'app-aluno-treino-exercicio',
  templateUrl: './aluno-treino-exercicio.component.html',
  styleUrls: ['./aluno-treino-exercicio.component.css']
})
export class AlunoTreinoExercicioComponent implements OnInit {

  // MatRiple properties
  centered = false;
  disabled = false;
  unbounded = false;
  radius: number;
  color: string;

  imgUrl = '';
  alt = '';

  @Input()
  alunoTreinoExercicio: AlunoTreinoExercicio = null;

  @Output()
  mudouAlunoTreinoExercicio = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.imgUrl = `${environment.exercicios_url}/${this.alunoTreinoExercicio.id_exercicio}-0.gif`;
    this.alt = this.alunoTreinoExercicio.exercicio.descricao_pt;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AlunoTreinoExercicioDialogFormComponent, {
      width: '95%',
      height: '95%',
      data: this.alunoTreinoExercicio
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Exercicio de Retorno: ', result);
      if (result) {
        if (!compareAlunoTreinoExercicio(this.alunoTreinoExercicio, result)) {
          this.mudouAlunoTreinoExercicio.emit({alunoTreinoExercicio: result, operation: 'update'});
        }
      }
      // Delete
      if (result === null) {
        this.mudouAlunoTreinoExercicio.emit({alunoTreinoExercicio: this.alunoTreinoExercicio, operation: 'delete'});
      }
    });
  }
  delete() {
    console.log('REMOVENDO EXERCICIO');
  }
}
