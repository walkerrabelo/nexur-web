import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpBaseService } from '../http-base.service';
import { Exercicio } from '../../models/exercicio/exercicio';

@Injectable()
export class ExercicioService extends HttpBaseService<Exercicio> {
  constructor(protected http: HttpClient) {
    super(http, 'exercicio', 'id_exercicio');
  }
}
