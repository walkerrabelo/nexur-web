import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/services/autenticacao/autenticacao.service';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formSignIn: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, private autenticacaoService: AutenticacaoService) { }

  ngOnInit() {
    this.formSignIn = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }
  login() {
    const user = this.formSignIn.get('usuario').value;
    const password = this.formSignIn.get('senha').value;
    this.autenticacaoService.authenticate(user, password)
      .subscribe(
        () => console.log('Autenticou...'),
        err => {
          console.log('Não autenticou');
          console.log(err);
         }
      );
  }
  forget() {

  }

}
