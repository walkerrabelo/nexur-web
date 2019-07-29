import { MatDialog } from '@angular/material';
import { AlunoTreinoExercicioDialogFormComponent } from './aluno-treino-exercicio-dialog-form/aluno-treino-exercicio-dialog-form.component';
import { Component, OnInit, Input } from '@angular/core';
import { AlunoTreinoExercicio } from '../../../../models/aluno/aluno-treino-exercicio';
import { environment } from 'src/environments/environment';

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
      if (result) {
        const description = result[0];
        const activationDate = result[0];
        const dueDate = result[2];
        console.log('Dados de atualizacao: ');
        console.log(result);
      }
    });
  }
  delete() {
    console.log('REMOVENDO EXERCICIO');
  }
}
