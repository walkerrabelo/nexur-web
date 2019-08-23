import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpBaseService } from '../http-base.service';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { AlunoCalendario } from '../../models/aluno/aluno-calendario';

@Injectable()
export class AlunoCalendarioService extends HttpBaseService<AlunoCalendario> {

  constructor(protected http: HttpClient) {
    super(http, 'aluno-calendario', 'id');
  }

  getCalendario(idAluno: string) {
    return this.http
    .get<AlunoCalendario[]>(`${environment.api_url}/aluno-calendario/index?id=${idAluno}`).pipe(take(1));
  }
}
