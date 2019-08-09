import { MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlunoTreino } from '../../../models/aluno/aluno-treino';
import { Subscription } from 'rxjs';
import { AlunoDataService } from '../../../services/aluno/aluno-data.service';
import { Aluno } from '../../../models/aluno/aluno';
import { AlunoService } from '../../../services/aluno/aluno.service';
import { AlunoTreinoNovoComponent } from '../aluno-treino/aluno-treino-novo/aluno-treino-novo.component';


@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css'],
  animations: [
    // animation triggers go here
  ]
})
export class AlunoComponent implements OnInit, OnDestroy {

  aluno: Aluno;
  listTreinos: AlunoTreino[] = [];
  subscriptionListAlunoTreino: Subscription;
  tooltipButton = 'Novo Treino';
  buttonDissabled = false;
  selectedTab = new FormControl(0);
  constructor(
    private dialog: MatDialog,
    private alunoDataService: AlunoDataService,
    private alunoService: AlunoService) { }

  ngOnInit() {
    if (this.alunoDataService.hasEntity()) {
      this.aluno = this.alunoDataService.get();
      this.loadData();
    }
  }

  loadData() {
    this.subscriptionListAlunoTreino = this.alunoService.getTreinos(this.aluno.id_aluno).subscribe(
        aluno => {
          this.listTreinos = aluno.series;
        }
      );
  }

  ngOnDestroy(): void {
    if (this.subscriptionListAlunoTreino) {
      this.subscriptionListAlunoTreino.unsubscribe();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AlunoTreinoNovoComponent, {
      width: '350px',
      data: this.aluno.id_aluno
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadData();
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
