import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-treino',
  templateUrl: './aluno-treino.component.html',
  styleUrls: ['./aluno-treino.component.css']
})
export class AlunoTreinoComponent implements OnInit {

  expanded = false;
  showHideText = 'Exibir';
  activeTrain = true;
  constructor() { }

  ngOnInit() {
  }

  expandExercices() {
    this.expanded = !this.expanded;
    this.showHideText = this.expanded ? 'Ocultar' : 'Exibir';
  }

  activateTrain() {
    this.activeTrain = !this.activeTrain;
    console.log(this.activeTrain);
  }
}
