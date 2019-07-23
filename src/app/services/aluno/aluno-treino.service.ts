import { Injectable } from '@angular/core';
import { HttpBaseService } from '../http-base.service';
import { HttpClient } from '@angular/common/http';

import { AlunoTreino } from '../../models/aluno/aluno-treino';

@Injectable()
export class AlunoTreinoService extends HttpBaseService<AlunoTreino> {
  constructor(protected http: HttpClient) {
    super(http, 'aluno-treino');
  }
}
