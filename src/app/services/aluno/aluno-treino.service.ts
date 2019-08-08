import { Injectable } from '@angular/core';
import { HttpBaseService } from '../http-base.service';
import { HttpClient } from '@angular/common/http';

import { AlunoTreino } from '../../models/aluno/aluno-treino';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class AlunoTreinoService extends HttpBaseService<AlunoTreino> {
  constructor(protected http: HttpClient) {
    super(http, 'aluno-treino', 'id_serie');
  }
  create(alunoTreino): Observable<any> {
    const url = `${this.API}/create-treino`;
    return this.http.post(url, alunoTreino).pipe(take(1));
  }

  activateDeactivateTreino(id: string) {
    console.log('Ativando/Desativando Treino: ', id);
    const url = `${this.API}/activate-deactivate?id=${id}`;
    return this.http.get(url).pipe(take(1));
  }
}
