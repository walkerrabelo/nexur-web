import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

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
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.alunoExercicioForm = this.formBuilder.group({
      description: '',
      activationDate: '',
      dueDate: '',
    });
  }

}

export interface DialogData {
  description: string;
  activationDate: Date;
  dueDate: Date;
}
