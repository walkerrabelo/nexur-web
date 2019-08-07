import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlunoTreino } from 'src/app/models/aluno/aluno-treino';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-aluno-treino-editar',
  templateUrl: './aluno-treino-editar.component.html',
  styleUrls: ['./aluno-treino-editar.component.css']
})
export class AlunoTreinoEditarComponent implements OnInit {

  alunoTreinoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AlunoTreinoEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public alunoTreino: AlunoTreino) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.alunoTreinoForm = this.formBuilder.group({
      descricao: this.alunoTreino.descricao,
      dataAtivacao: [moment(this.alunoTreino.data_ativacao).format()],
      dataVencimento: [moment(this.alunoTreino.data_vencimento).format()]
    });
  }

  fillData() {
    this.alunoTreino.data_ativacao = this.alunoTreinoForm.get('dataAtivacao').value;
    this.alunoTreino.data_vencimento = this.alunoTreinoForm.get('dataVencimento').value;
    this.alunoTreino.descricao = this.alunoTreinoForm.get('descricao').value;
  }

  save() {
    this.fillData();
    this.dialogRef.close(this.alunoTreino);
  }

  onNoClick() {
    this.dialogRef.close(null);
  }
}
