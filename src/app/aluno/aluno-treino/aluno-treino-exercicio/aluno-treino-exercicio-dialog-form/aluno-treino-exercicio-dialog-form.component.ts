import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { AlunoTreinoExercicio } from 'src/app/models/aluno/aluno-treino-exercicio';

@Component({
  selector: 'app-aluno-treino-exercicio-dialog-form',
  templateUrl: './aluno-treino-exercicio-dialog-form.component.html',
  styleUrls: ['./aluno-treino-exercicio-dialog-form.component.css']
})
export class AlunoTreinoExercicioDialogFormComponent implements OnInit {

  alunoExercicioForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AlunoTreinoExercicioDialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public alunoTreinoExercicio: AlunoTreinoExercicio) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.alunoExercicioForm = this.formBuilder.group({
      tipoRepeticao: '',
      repeticao: '',
      carga: '',
      intervalo: '',
      nota: '',
    });
  }
}
