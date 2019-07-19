import { Injectable } from '@angular/core';
import { HttpBaseService } from '../http-base.service';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../../models/aluno/aluno';

@Injectable()
export class AlunoService extends HttpBaseService<Aluno> {

    constructor(protected http: HttpClient) {
      super(http, 'aluno');
    }
}
