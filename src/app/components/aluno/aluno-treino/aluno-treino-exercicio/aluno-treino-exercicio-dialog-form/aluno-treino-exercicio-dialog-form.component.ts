import { Exercicio } from './../../../../../models/exercicio/exercicio';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { AlunoTreinoExercicio } from 'src/app/models/aluno/aluno-treino-exercicio';
import { Subscription } from 'rxjs';
import { ExercicioUsuario } from '../../../../../models/exercicio/exercicio-usuario';
import { environment } from 'src/environments/environment.prod';
import { ExercicioUsuarioDataService } from '../../../../../services/exercicio/exercicio-usuario-data.service';
import { TIPOS_REPETICOES } from '../../../../../models/exercicio/repeticao';

@Component({
  selector: 'app-aluno-treino-exercicio-dialog-form',
  templateUrl: './aluno-treino-exercicio-dialog-form.component.html',
  styleUrls: ['./aluno-treino-exercicio-dialog-form.component.css']
})
export class AlunoTreinoExercicioDialogFormComponent implements OnInit, OnDestroy {

  tiposRepeticoes = TIPOS_REPETICOES;
  exercicioUsuarioForm: FormGroup;
  alunoExercicioForm: FormGroup;
  alunoTreinoExercicio: AlunoTreinoExercicio;
  imgUrl = '';


  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AlunoTreinoExercicioDialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public alunoTreinoExercicioEnter: AlunoTreinoExercicio) {}

  ngOnInit() {
    this.alunoTreinoExercicio = JSON.parse(JSON.stringify(this.alunoTreinoExercicioEnter));
    this.loadImgUrl();
    this.createForm();
  }

  ngOnDestroy() { }

  createForm() {
    this.alunoExercicioForm = this.formBuilder.group({
      tipoRepeticao: this.alunoTreinoExercicio.tipoRepeticao,
      repeticao: this.alunoTreinoExercicio.num_repeticao,
      carga: this.alunoTreinoExercicio.carga,
      intervalo: this.alunoTreinoExercicio.intervalo,
      nota: this.alunoTreinoExercicio.nota,
    });
  }

  onNoClick(): void {
    this.ngOnDestroy();
    this.dialogRef.close();
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
    this.alunoTreinoExercicio.intervalo = this.alunoExercicioForm.get('intervalo').value;
    this.alunoTreinoExercicio.nota = this.alunoExercicioForm.get('nota').value;
  }

  save() {
    this.fillObject();
    this.dialogRef.close(this.alunoTreinoExercicio);
  }

  delete() {
    this.dialogRef.close(null);
  }

  compareRepeticoes(obj1, obj2) {
    return (obj1.id_tipo_repeticao == obj2.id_tipo_repeticao);
  }
}
