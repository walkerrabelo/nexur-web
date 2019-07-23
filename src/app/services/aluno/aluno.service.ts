import { Injectable } from '@angular/core';
import { HttpBaseService } from '../http-base.service';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../../models/aluno/aluno';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class AlunoService extends HttpBaseService<Aluno> {

    constructor(protected http: HttpClient) {
      super(http, 'aluno');
    }

    getTreinos(idAluno: string) {
      return this.http.get<Aluno>(`${environment.api_url}/aluno-treino/index?id=${idAluno}`).pipe(take(1));
    }
}
