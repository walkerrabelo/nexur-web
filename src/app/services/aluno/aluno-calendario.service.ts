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

  getCalendario(idAluno: string, inicio: string, fim: string) {
    const url = `${this.API}/index?id=${idAluno}&inicio=${inicio}&fim=${fim}`;
    return this.http
    .get<AlunoCalendario[]>(url).pipe(take(1));
  }
}
