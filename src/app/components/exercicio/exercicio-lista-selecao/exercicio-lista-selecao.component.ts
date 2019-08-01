import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { ExercicioUsuarioDataService2 } from '../../../services/exercicio/exercicio-usuario-data2.service';
import { ExercicioUsuario } from '../../../models/exercicio/exercicio-usuario';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-exercicio-lista-selecao',
  templateUrl: './exercicio-lista-selecao.component.html',
  styleUrls: ['./exercicio-lista-selecao.component.css']
})
export class ExercicioListaSelecaoComponent implements OnInit {

  debounce: Subject<string> = new Subject<string>();
  listaExercicioUsuarioFiltrados: ExercicioUsuario[];

  @Output()
  exercicioClicado = new EventEmitter();

  constructor(private exercicioUsuarioDataService2: ExercicioUsuarioDataService2) {
    this.listaExercicioUsuarioFiltrados = this.exercicioUsuarioDataService2.getList();
    this.filter();
  }

  ngOnInit() { }

  selectExercicio(exercicio: ExercicioUsuario) {
    this.exercicioClicado.emit(exercicio);
  }

  private filter() {
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter =>
      this.listaExercicioUsuarioFiltrados =
      this.exercicioUsuarioDataService2.getList().filter(exerciciUsuario =>
        exerciciUsuario.exercicio.descricao_pt.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }


}
