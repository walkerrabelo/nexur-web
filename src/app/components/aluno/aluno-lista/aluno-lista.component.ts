import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Aluno } from '../../../models/aluno/aluno';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { AlunoService } from '../../../services/aluno/aluno.service';
import { AlunoDataService } from '../../../services/aluno/aluno-data.service';
import { AlunoFormDialogComponent } from '../aluno-form/aluno-form-dialog/aluno-form-dialog.component';

@Component({
  selector: 'app-aluno-lista',
  templateUrl: './aluno-lista.component.html',
  styleUrls: ['./aluno-lista.component.css']
})

export class AlunoListaComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['nome', 'email', 'avaliacao', 'vencimento', 'grupo'];
  dataSource: MatTableDataSource<Aluno>;
  debounce: Subject<string> = new Subject<string>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private router: Router, private alunoService: AlunoService,
    private alunoDataService: AlunoDataService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.alunoDataService.remove();
    this.dataSource = new MatTableDataSource<Aluno>();
    this.alunoService.list().subscribe(alunos => this.dataSource.data = alunos);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.debounce
      .pipe(debounceTime(300))
      .subscribe(
        filter => this.dataSource.filter = filter.trim().toLowerCase());
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  edit(aluno: Aluno) {
    this.alunoDataService.set(aluno);
    this.router.navigate(['/aluno']);
  }

  create() {
    const dialogRef = this.dialog.open(AlunoFormDialogComponent, {
      width: '60%', height: '40%',
    });
  }
}
