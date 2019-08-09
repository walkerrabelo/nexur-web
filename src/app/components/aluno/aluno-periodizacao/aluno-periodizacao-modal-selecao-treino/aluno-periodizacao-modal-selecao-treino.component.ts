import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlunoTreino } from '../../../../models/aluno/aluno-treino';

@Component({
  selector: 'app-aluno-periodizacao-modal-selecao-treino',
  templateUrl: './aluno-periodizacao-modal-selecao-treino.component.html',
  styleUrls: ['./aluno-periodizacao-modal-selecao-treino.component.css']
})
export class AlunoPeriodizacaoModalSelecaoTreinoComponent implements OnInit {

  formSelecaoTreino: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AlunoPeriodizacaoModalSelecaoTreinoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AlunoTreino[]
  ) { }

  ngOnInit() {
    console.log(this.data);
    this.createForm();
  }

  createForm() {
    this.formSelecaoTreino = this.formBuilder.group({
      treino: this.data[0]
    });
  }

  save() {
    this.dialogRef.close(this.formSelecaoTreino.get('treino').value);
  }
  onNoClick() {
    this.dialogRef.close(null);
  }
  compareTreinos(tr1: AlunoTreino, tr2: AlunoTreino) {
    return tr1.id_serie === tr2.id_serie;
  }
}
