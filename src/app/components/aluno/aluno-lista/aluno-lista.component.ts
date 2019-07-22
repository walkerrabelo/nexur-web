import { Component, OnInit, ViewChild } from '@angular/core';
import { Aluno } from '../../../models/aluno/aluno';
import { LISTA_ALUNOS } from './alunos-lista-exemplo';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-aluno-lista',
  templateUrl: './aluno-lista.component.html',
  styleUrls: ['./aluno-lista.component.css']
})

export class AlunoListaComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'email', 'avaliacao', 'vencimento', 'grupo'];
  dataSource = new MatTableDataSource<Aluno>(LISTA_ALUNOS);
  debounce: Subject<string> = new Subject<string>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private router: Router) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.debounce
      .pipe(debounceTime(300))
      .subscribe(
        filter => this.dataSource.filter = filter.trim().toLowerCase());
  }

  edit() {
    this.router.navigate(['/aluno']);
  }

}
