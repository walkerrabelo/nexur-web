import { AlunoTreino } from '../../../../models/aluno/aluno-treino';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem} from '@angular/cdk/drag-drop';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-aluno-treino-edit',
  templateUrl: './aluno-treino-edit.component.html',
  styleUrls: ['./aluno-treino-edit.component.css']
})
export class AlunoTreinoEditComponent implements OnInit, OnDestroy {

  alunoTreinoEditForm: FormGroup;
  listaExercicioForm: FormGroup;
  debounce: Subject<string> = new Subject<string>();

  todoAll = [
    {
      nome: 'ABDOMINAL SUPRA',
      repeticao: '3x5',
      peso: '100kg',
      tempo: '60s',
      url: 'https://media.giphy.com/media/GchncVE4gJDjO/giphy.gif'
    },
    {
      nome: 'LEG PRESS',
      repeticao: '3x5',
      peso: '100kg',
      tempo: '60s',
      url: 'https://media.giphy.com/media/iQK5zCZL4mBuU/giphy.gif'
    },
    {
      nome: 'SUPINO RETO',
      repeticao: '3x5',
      peso: '100kg',
      tempo: '60s',
      url: 'https://media.giphy.com/media/mnPBQeSZp8XN6/giphy.gif'
    },
    {
      nome: 'SUPINO INCLINADO',
      repeticao: '3x5',
      peso: '100kg',
      tempo: '60s',
      url: 'https://media.giphy.com/media/Sl0eYejFnbeta/giphy.gif'
    },
  ];

  todo = [
    {
      nome: 'ABDOMINAL SUPRA',
      repeticao: '3x5',
      peso: '100kg',
      tempo: '60s',
      url: 'https://media.giphy.com/media/GchncVE4gJDjO/giphy.gif'
    },
    {
      nome: 'LEG PRESS',
      repeticao: '3x5',
      peso: '100kg',
      tempo: '60s',
      url: 'https://media.giphy.com/media/iQK5zCZL4mBuU/giphy.gif'
    },
    {
      nome: 'SUPINO RETO',
      repeticao: '3x5',
      peso: '100kg',
      tempo: '60s',
      url: 'https://media.giphy.com/media/mnPBQeSZp8XN6/giphy.gif'
    },
    {
      nome: 'SUPINO INCLINADO',
      repeticao: '3x5',
      peso: '100kg',
      tempo: '60s',
      url: 'https://media.giphy.com/media/Sl0eYejFnbeta/giphy.gif'
    },
  ];

  done = [
    {
      nome: 'ABDOMINAL SUPRA',
      repeticao: '3x5',
      peso: '100kg',
      tempo: '60s',
      url: 'https://media.giphy.com/media/GchncVE4gJDjO/giphy.gif'
    },
    {
      nome: 'ABDOMINAL SUPRA',
      repeticao: '3x5',
      peso: '100kg',
      tempo: '60s',
      url: 'https://media.giphy.com/media/iQK5zCZL4mBuU/giphy.gif'
    },
    {
      nome: 'ABDOMINAL SUPRA',
      repeticao: '3x5',
      peso: '100kg',
      tempo: '60s',
      url: 'https://media.giphy.com/media/mnPBQeSZp8XN6/giphy.gif'
    },
    {
      nome: 'ABDOMINAL SUPRA',
      repeticao: '3x5',
      peso: '100kg',
      tempo: '60s',
      url: 'https://media.giphy.com/media/Sl0eYejFnbeta/giphy.gif'
    },
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
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter =>
      this.todo = this.todoAll.filter(item =>
        item.nome.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
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
  findExercices(partialName: string) {
    this.todo = this.todoAll.filter(
        item => item.nome.toLowerCase().includes(partialName.toLowerCase())
      );
  }
}
