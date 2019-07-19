import { Injectable } from '@angular/core';
import { HttpBaseService } from '../http-base.service';
import { HttpClient } from '@angular/common/http';
import { AlunoTreinoExercicio } from '../../models/aluno/aluno-treino-exercicio';

@Injectable()
export class AlunoTreinoExercicioService extends HttpBaseService<AlunoTreinoExercicio> {

  constructor(protected http: HttpClient) {
    super(http, 'aluno-treino');
  }
}
