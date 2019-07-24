import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Aluno } from 'src/app/models/aluno/aluno';
import { AlunoService } from 'src/app/services/aluno/aluno.service';
import { Router } from '@angular/router';
import { AlunoDataService } from '../../../../services/aluno/aluno-data.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-aluno-form-dialog',
  templateUrl: './aluno-form-dialog.component.html',
  styleUrls: ['./aluno-form-dialog.component.css']
})
export class AlunoFormDialogComponent implements OnInit {

  formAluno: FormGroup;
  aluno: Aluno = new Aluno();
  constructor(
    private alunoService: AlunoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alunoDataService: AlunoDataService,
    public dialogRef: MatDialogRef<AlunoFormDialogComponent>) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formAluno = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.email],
      data_nascimento: [''],
      data_matricula: [''],
      sexo: [''],
      usuario: [''],
      senha: ['']
    });
  }

  submit() {
    this.fillData();
    console.log('Dados do aluno: ');
    console.log(this.aluno);
    this.alunoService.save(this.aluno).subscribe(
      aluno => {
        console.log('Salvou!');
        console.log(aluno);
        this.alunoDataService.set(aluno as Aluno);
        this.dialogRef.close();
        this.router.navigate(['aluno']);
      }
    );
  }

  fillData() {
    this.aluno.nome = this.formAluno.get('nome').value;
    this.aluno.email = this.formAluno.get('email').value;
    this.aluno.data_nascimento = this.formAluno.get('data_nascimento').value;
    this.aluno.data_matricula = this.formAluno.get('data_matricula').value;
    this.aluno.sexo = this.formAluno.get('sexo').value;
    // tslint:disable-next-line: no-string-literal
    this.aluno['login'] = this.formAluno.get('usuario').value;
    // tslint:disable-next-line: no-string-literal
    this.aluno['senha'] = this.formAluno.get('senha').value;
    this.aluno.grupo = '0';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
