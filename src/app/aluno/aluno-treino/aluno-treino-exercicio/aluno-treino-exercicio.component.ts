import { MatDialog } from '@angular/material';
import { AlunoTreinoExercicioDialogFormComponent } from './aluno-treino-exercicio-dialog-form/aluno-treino-exercicio-dialog-form.component';
import { Component, OnInit, Input } from '@angular/core';
import { AlunoTreinoExercicio } from '../../../models/aluno/aluno-treino-exercicio';

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

  //
  @Input()
  alunoTreinoExercicio: AlunoTreinoExercicio;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AlunoTreinoExercicioDialogFormComponent, {
      width: '350px',
      data: {
        description: 'Leg Press Abd Supra Infra Max',
        activationDate: Date.now(),
        dueDate: Date.now()
      }
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
