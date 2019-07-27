import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { AlunoTreinoExercicio } from 'src/app/models/aluno/aluno-treino-exercicio';
import { Subject, Observable } from 'rxjs';
import { ExercicioUsuarioService } from '../../../../../services/exercicio/exercicio-usuario.service';
import { ExercicioUsuario } from '../../../../../models/exercicio/exercicio-usuario';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-aluno-treino-exercicio-dialog-form',
  templateUrl: './aluno-treino-exercicio-dialog-form.component.html',
  styleUrls: ['./aluno-treino-exercicio-dialog-form.component.css']
})
export class AlunoTreinoExercicioDialogFormComponent implements OnInit, OnDestroy {

  debounce: Subject<string> = new Subject<string>();
  alunoExercicioForm: FormGroup;
  exercicioUsuarioForm: FormGroup;
  listaExercicioUsuarioTodos: ExercicioUsuario[];
  listaExercicioUsuarioFiltrados: ExercicioUsuario[];

  constructor(
    private formBuilder: FormBuilder,
    private exercicioUsuarioService: ExercicioUsuarioService,
    public dialogRef: MatDialogRef<AlunoTreinoExercicioDialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public alunoTreinoExercicio: AlunoTreinoExercicio) {}

  ngOnInit() {
    this.exercicioUsuarioService.list().subscribe(
      lista => {
        this.listaExercicioUsuarioTodos = lista;
        this.listaExercicioUsuarioFiltrados = lista;
      }
    );
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter =>
      this.listaExercicioUsuarioFiltrados = this.listaExercicioUsuarioTodos.filter(exerciciUsuario =>
        exerciciUsuario.exercicio.descricao_pt.toLowerCase().includes(filter.toLowerCase())
      )
    );
    this.createForm();
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }

  createForm() {
    this.alunoExercicioForm = this.formBuilder.group({
      tipoRepeticao: '',
      repeticao: '',
      carga: '',
      intervalo: '',
      nota: '',
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
