import { Injectable } from '@angular/core';
import { HttpBaseService } from '../http-base.service';
import { AlunoCalendarioInsert } from '../../models/aluno/aluno-calendario-insert';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class AlunoCalendarioInsertionService extends HttpBaseService<AlunoCalendarioInsert> {

  constructor(protected http: HttpClient) {
    super(http, 'aluno-calendario', 'id');
  }

  create(alunoCalendarioInsert): Observable<any> {
    const url = `${this.API}/save`;
    return this.http.post(url, alunoCalendarioInsert).pipe(take(1));
  }
}
