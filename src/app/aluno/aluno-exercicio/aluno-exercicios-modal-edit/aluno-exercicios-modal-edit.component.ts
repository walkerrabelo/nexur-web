import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-aluno-exercicios-modal-edit',
  templateUrl: './aluno-exercicios-modal-edit.component.html',
  styleUrls: ['./aluno-exercicios-modal-edit.component.css']
})
export class AlunoExerciciosModalEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AlunoExerciciosModalEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}

export interface DialogData {
  description: string;
  activationDate: Date;
  dueDate: Date;
}
