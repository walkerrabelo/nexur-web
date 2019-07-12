import { AlunoTreinoEditComponent } from './../aluno-treino/aluno-treino-edit/aluno-treino-edit.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    console.log('Fazendo a requisição...');
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AlunoTreinoEditComponent, {
      width: '90%',
      height: '90%',
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
}
