import { AlunoExercicioModalEditComponent } from './aluno-exercicio-modal-edit/aluno-exercicio-modal-edit.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-aluno-exercicio',
  templateUrl: './aluno-exercicio.component.html',
  styleUrls: ['./aluno-exercicio.component.css']
})
export class AlunoExercicioComponent implements OnInit {

  // Mat Riple Properties
  centered = false;
  disabled = false;
  unbounded = false;
  radius: number;
  color: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AlunoExercicioModalEditComponent, {
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
