import { Injectable } from '@angular/core';
import { HttpBaseService } from '../http-base.service';
import { ExercicioUsuario } from '../../models/exercicio/exercicio-usuario';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ExercicioUsuarioService extends HttpBaseService<ExercicioUsuario>{

  constructor(protected http: HttpClient) {
    super(http, 'exercicio', 'id_exercicio_usuario');
  }
}
