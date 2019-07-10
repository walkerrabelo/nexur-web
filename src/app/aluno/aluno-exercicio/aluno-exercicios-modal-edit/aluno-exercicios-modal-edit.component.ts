import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-aluno-exercicios-modal-edit',
  templateUrl: './aluno-exercicios-modal-edit.component.html',
  styleUrls: ['./aluno-exercicios-modal-edit.component.css']
})
export class AlunoExerciciosModalEditComponent implements OnInit {

  alunoExercicioForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AlunoExerciciosModalEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.alunoExercicioForm = this.formBuilder.group({
      description: '', // this.data.description,
      activationDate: '', // this.data.activationDate,
      dueDate: '', // this.data.dueDate
    });
  }

}

export interface DialogData {
  description: string;
  activationDate: Date;
  dueDate: Date;
}
