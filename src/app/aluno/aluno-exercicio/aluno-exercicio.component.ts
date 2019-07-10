import { AlunoExerciciosModalEditComponent } from './aluno-exercicios-modal-edit/aluno-exercicios-modal-edit.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-aluno-exercicio',
  templateUrl: './aluno-exercicio.component.html',
  styleUrls: ['./aluno-exercicio.component.css']
})
export class AlunoExercicioComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AlunoExerciciosModalEditComponent, {
      width: '350px',
      data: {
        description: 'Leg Press Abd Supra Infra Max',
        activationDate: Date.now(),
        dueDate: Date.now()
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      const description = result[0];
      const activationDate = result[0];
      const dueDate = result[2];
      console.log('Dados de atualizacao: ');
      console.log(result);
    });
  }
}
