import { Component, OnInit, ViewChild } from '@angular/core';
import { Aluno } from '../../models/aluno/aluno';
import { LISTA_ALUNOS } from './alunos-lista-exemplo';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-aluno-lista',
  templateUrl: './aluno-lista.component.html',
  styleUrls: ['./aluno-lista.component.css']
})

export class AlunoListaComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'email', 'avaliacao', 'vencimento', 'grupo'];
  dataSource = new MatTableDataSource<Aluno>(LISTA_ALUNOS);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
