import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { ExercicioUsuarioDataService } from '../../../services/exercicio/exercicio-usuario-data.service';
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

  constructor(private exercicioUsuarioDataService: ExercicioUsuarioDataService) { }

  ngOnInit() {
    this.listaExercicioUsuarioFiltrados = this.exercicioUsuarioDataService.getList();
    this.filter();
  }

  selectExercicio(exercicio: ExercicioUsuario) {
    this.exercicioClicado.emit(exercicio);
  }

  private filter() {
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter =>
      this.listaExercicioUsuarioFiltrados =
      this.exercicioUsuarioDataService.getList().filter(exerciciUsuario =>
        exerciciUsuario.exercicio.descricao_pt.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }


}
