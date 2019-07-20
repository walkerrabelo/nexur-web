import { AlunoTreinoEditComponent } from './../aluno-treino/aluno-treino-edit/aluno-treino-edit.component';
import { MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css'],
  animations: [
    // animation triggers go here
  ]
})
export class AlunoComponent implements OnInit {

  tooltipButton = 'Novo Treino';
  buttonDissabled = false;
  selectedTab = new FormControl(0);
  constructor(private dialog: MatDialog, private http: HttpClient) { }

  ngOnInit() {  }
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

  create() {
    if (this.selectedTab.value === 0) {
      console.log('Criando um Treino...');
      this.openDialog();
    }
    if (this.selectedTab.value === 1) {
      console.log('Criando uma Avaliação');
    }
    if (this.selectedTab.value === 2) {
      console.log('Botão desabilitado...');
    }
  }

  changeTootipText() {
    if (this.selectedTab.value === 0) {
      this.tooltipButton = 'Novo Treino';
      this.buttonDissabled = false;
    }
    if (this.selectedTab.value === 1) {
      this.tooltipButton = 'Nova Avaliação';
      this.buttonDissabled = false;
    }
    if (this.selectedTab.value === 2) {
      this.tooltipButton = 'Selecione Treino ou Avaliação para Habilitar o botão';
      this.buttonDissabled = true;
    }
  }
}
