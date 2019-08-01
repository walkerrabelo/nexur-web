import { Injectable } from '@angular/core';
import { ExercicioUsuarioService } from './exercicio-usuario.service';
import { ExercicioUsuario } from '../../models/exercicio/exercicio-usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExercicioUsuarioDataService {

  listExercicioUsuario: Observable<ExercicioUsuario[]>;

  constructor(private exercicioUsuarioService: ExercicioUsuarioService) {
    this.loadList();
  }

  loadList() {
    this.listExercicioUsuario = this.exercicioUsuarioService.list();
    console.log('Carregando Lista de Exercicios...');
  }

  getList() {
    if (!this.listExercicioUsuario) {
      this.loadList();
    }
    return this.listExercicioUsuario;
  }
}
