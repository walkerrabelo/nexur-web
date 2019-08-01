
import { Injectable, OnDestroy } from '@angular/core';
import { ExercicioUsuarioService } from './exercicio-usuario.service';
import { ExercicioUsuario } from '../../models/exercicio/exercicio-usuario';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExercicioUsuarioDataService2 {

  listExercicioUsuario: ExercicioUsuario[];
  subscriptionList: Subscription;
  constructor(private exercicioUsuarioService: ExercicioUsuarioService) {
    this.loadList();
  }

  loadList() {
    console.log('Carregando Lista de Exercicios...');
    this.subscriptionList = this.exercicioUsuarioService
    .list().subscribe(
      list => this.listExercicioUsuario = list
    );
  }

  getList() {
    return this.listExercicioUsuario;
  }

  private unsubscribeAll() {
    if (this.subscriptionList) {
      this.subscriptionList.unsubscribe();
    }
  }
}
