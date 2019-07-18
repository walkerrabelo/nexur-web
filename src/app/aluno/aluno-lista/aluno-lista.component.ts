import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../models/aluno/aluno';
import { LISTA_ALUNOS_EXEMPLO } from './alunos-lista-exemplo';

@Component({
  selector: 'app-aluno-lista',
  templateUrl: './aluno-lista.component.html',
  styleUrls: ['./aluno-lista.component.css']
})

export class AlunoListaComponent implements OnInit {

  listaAlunos = LISTA_ALUNOS_EXEMPLO;

  constructor() { }

  ngOnInit() {
  }

}
