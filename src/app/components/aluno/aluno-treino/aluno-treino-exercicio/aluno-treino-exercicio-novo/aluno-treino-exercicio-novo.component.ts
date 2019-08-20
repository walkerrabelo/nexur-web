import { Component, OnInit, OnDestroy } from '@angular/core';
import { TIPOS_REPETICOES } from '../../../../../models/exercicio/repeticao';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ExercicioUsuario } from '../../../../../models/exercicio/exercicio-usuario';
import { AlunoTreinoExercicio } from '../../../../../models/aluno/aluno-treino-exercicio';
import { MatDialogRef } from '@angular/material';
import { environment } from 'src/environments/environment.prod';
import { Exercicio } from '../../../../../models/exercicio/exercicio';

@Component({
  selector: 'app-aluno-treino-exercicio-novo',
  templateUrl: './aluno-treino-exercicio-novo.component.html',
  styleUrls: ['./aluno-treino-exercicio-novo.component.css']
})
export class AlunoTreinoExercicioNovoComponent implements OnInit, OnDestroy{

  tiposRepeticoes = TIPOS_REPETICOES;
  exercicioUsuarioForm: FormGroup;
  alunoExercicioForm: FormGroup;
  listaExercicioUsuarioTodos: ExercicioUsuario[];
  listaExercicioUsuarioFiltrados: ExercicioUsuario[];
  subscriptionListaExercicioUsuario: Subscription;

  alunoTreinoExercicio: AlunoTreinoExercicio = new AlunoTreinoExercicio();
  imgUrl = null;


  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AlunoTreinoExercicioNovoComponent>) {}

  ngOnInit() {
    this.alunoTreinoExercicio.exercicio = null;
    this.createForm();
  }

  ngOnDestroy() {
  }

  createForm() {
    this.alunoExercicioForm = this.formBuilder.group({
      tipoRepeticao: TIPOS_REPETICOES[0],
      repeticao: '',
      carga: '',
      intervalo: '',
      nota: '',
    });
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  selectExercicio(exercicio: Exercicio) {
    this.alunoTreinoExercicio.exercicio = exercicio;
    this.alunoTreinoExercicio.id_exercicio = exercicio.id_exercicio;
    this.loadImgUrl();
  }

  loadImgUrl() {
    // Put conversion in a service @Cacheable
    this.imgUrl = `${environment.exercicios_url}/${this.alunoTreinoExercicio.exercicio.id_exercicio}-0.gif`;
  }

  fillObject() {
    this.alunoTreinoExercicio.tipoRepeticao = TIPOS_REPETICOES[this.alunoExercicioForm.get('tipoRepeticao').value];
    this.alunoTreinoExercicio.id_tipo_repeticao = this.alunoExercicioForm.get('tipoRepeticao').value['id_tipo_repeticao'];
    this.alunoTreinoExercicio.num_repeticao = this.alunoExercicioForm.get('repeticao').value;
    this.alunoTreinoExercicio.carga = this.alunoExercicioForm.get('carga').value;
    this.alunoTreinoExercicio.intervalo = '' + this.alunoExercicioForm.get('intervalo').value;
    this.alunoTreinoExercicio.nota = this.alunoExercicioForm.get('nota').value;
    this.alunoTreinoExercicio.cor = '';
  }

  save() {
    if (this.alunoTreinoExercicio.exercicio) {
      this.fillObject();
      this.dialogRef.close(this.alunoTreinoExercicio);
    } else {
      this.dialogRef.close(null);
    }
  }

  compareRepeticoes(obj1, obj2) {
    return (obj1.id_tipo_repeticao == obj2.id_tipo_repeticao);
  }
}
