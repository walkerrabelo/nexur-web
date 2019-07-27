import { environment } from './../../../../environments/environment.prod';
import { Component, OnInit, Input } from '@angular/core';
import { ExercicioUsuario } from '../../../models/exercicio/exercicio-usuario';

@Component({
  selector: 'app-exercicio-usuario',
  templateUrl: './exercicio-usuario.component.html',
  styleUrls: ['./exercicio-usuario.component.css']
})
export class ExercicioUsuarioComponent implements OnInit {

  @Input() exercicioUsuario: ExercicioUsuario;
  @Input() showSubTitle = true;
  imgUrl: string;

  constructor() { }

  ngOnInit() {
    this.imgUrl = `${environment.exercicios_url}/${this.exercicioUsuario.id_exercicio}-0.gif`;
  }

}
