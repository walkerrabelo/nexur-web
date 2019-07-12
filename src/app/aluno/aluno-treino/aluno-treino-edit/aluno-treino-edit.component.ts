import { AlunoTreino } from './../../../models/aluno/aluno-treino';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem} from '@angular/cdk/drag-drop';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-aluno-treino-edit',
  templateUrl: './aluno-treino-edit.component.html',
  styleUrls: ['./aluno-treino-edit.component.css']
})
export class AlunoTreinoEditComponent implements OnInit {

  alunoTreinoEditForm: FormGroup;
  listaExercicioForm: FormGroup;

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AlunoTreinoEditComponent>,
    @Inject(MAT_DIALOG_DATA) public alunoTreino: AlunoTreino) {
    this.createForms();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
  /**
   * TODO:
   * Validar o item em cada lista e adicionar / remover 
   * somente na lista da direita
   */
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  createForms() {
    this.listaExercicioForm = this.formBuilder.group({
      nomeTipoEquipamento: ''
    });

    this.alunoTreinoEditForm = this.formBuilder.group({
      descricao: 'TREINO DE FORÇA (CrossFit)',
      dataAtivacao: '',
      dataVencimento: ''
    });
  }
}
