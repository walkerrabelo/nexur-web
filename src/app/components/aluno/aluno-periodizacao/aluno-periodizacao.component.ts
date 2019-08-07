import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-periodizacao',
  templateUrl: './aluno-periodizacao.component.html',
  styleUrls: ['./aluno-periodizacao.component.css']
})
export class AlunoPeriodizacaoComponent implements OnInit {

  viewDate: Date = new Date();
  events = [];
  constructor() { }

  ngOnInit() {
  }

}
