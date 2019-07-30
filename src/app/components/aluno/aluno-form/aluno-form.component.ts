import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlunoDataService } from '../../../services/aluno/aluno-data.service';
import { AlunoService } from '../../../services/aluno/aluno.service';
import { Aluno } from '../../../models/aluno/aluno';
import { DatePipe } from '@angular/common';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  formAluno: FormGroup;
  aluno: Aluno;
  constructor(
    private alunoDataService: AlunoDataService,
    private alunoService: AlunoService,
    private formBuilder: FormBuilder) {
    }

  ngOnInit() {
    if (this.alunoDataService.hasEntity()) {
      this.aluno = this.alunoDataService.get();
    } else {
      this.aluno = new Aluno();
    }
    this.createForm();
  }

  createForm() {
    this.formAluno = this.formBuilder.group({
      nome: [this.aluno.nome, Validators.required],
      email: [this.aluno.email, Validators.email],
      data_nascimento: [moment(this.aluno.data_nascimento).format(),
         Validators.required],
      data_matricula: [moment(this.aluno.data_matricula).format(),
        Validators.required],
      sexo: [this.aluno.sexo],
      usuario: [this.aluno.usuario.login, Validators.required],
      senha: [this.aluno.usuario.senha, Validators.required]
    });
  }

  submit() {
    this.fillData();
    this.alunoService.save(this.aluno).subscribe(
      aluno => this.alunoDataService.set(aluno as Aluno)
    );
  }

  fillData() {
    this.aluno.nome = this.formAluno.get('nome').value;
    this.aluno.email = this.formAluno.get('email').value;
    this.aluno.data_nascimento = this.formAluno.get('data_nascimento').value;
    this.aluno.data_matricula = this.formAluno.get('data_matricula').value;
    this.aluno.sexo = this.formAluno.get('sexo').value;
    this.aluno.usuario.nome = this.formAluno.get('usuario').value;
    this.aluno.usuario.senha = this.formAluno.get('senha').value;
  }
}
