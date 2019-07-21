import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formSignIn: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formSignIn = this.formBuilder.group({
      usuario: '',
      senha: ''
    });
  }
  login() {

  }
  forget() {

  }

}
