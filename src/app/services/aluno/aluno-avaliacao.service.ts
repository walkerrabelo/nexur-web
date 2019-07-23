import { Injectable } from '@angular/core';
import { AlunoAvaliacao } from '../../models/aluno/aluno-avaliacao';
import { HttpBaseService } from '../http-base.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AlunoAvaliacaoService extends HttpBaseService<AlunoAvaliacao> {

  constructor(protected http: HttpClient) {
    super(http, 'aluno-treino', 'id_avaliacao');
  }
}
