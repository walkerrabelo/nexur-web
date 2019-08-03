import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlunoTreinoService } from '../../../../services/aluno/aluno-treino.service';
import { AlunoTreino } from '../../../../models/aluno/aluno-treino';

@Component({
  selector: 'app-aluno-treino-novo',
  templateUrl: './aluno-treino-novo.component.html',
  styleUrls: ['./aluno-treino-novo.component.css']
})
export class AlunoTreinoNovoComponent implements OnInit {

  alunoTreinoForm: FormGroup;
  alunoTreino = new AlunoTreino();

  constructor(
    private formBuilder: FormBuilder,
    private alunoTreinoService: AlunoTreinoService,
    public dialogRef: MatDialogRef<AlunoTreinoNovoComponent>,
    @Inject(MAT_DIALOG_DATA) public idAluno: string) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.alunoTreinoForm = this.formBuilder.group({
      descricao: '',
      dataAtivacao: '',
      dataVencimento: ''
    });
  }

  fillData() {
    this.alunoTreino.id_aluno = this.idAluno;
    this.alunoTreino.data_ativacao = this.alunoTreinoForm.get('dataAtivacao').value;
    this.alunoTreino.data_vencimento = this.alunoTreinoForm.get('dataVencimento').value;
    this.alunoTreino.descricao = this.alunoTreinoForm.get('descricao').value;
  }

  save() {
    this.fillData();
    this.alunoTreinoService.create(this.alunoTreino).subscribe(alunoT => this.dialogRef.close(alunoT));
  }

  onNoClick() {
    this.dialogRef.close(null);
  }
}
