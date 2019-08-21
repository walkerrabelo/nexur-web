import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-aluno-periodizacao-series-repeticoes-dialog',
  templateUrl: './aluno-periodizacao-series-repeticoes-dialog.component.html',
  styleUrls: ['./aluno-periodizacao-series-repeticoes-dialog.component.css']
})
export class AlunoPeriodizacaoSeriesRepeticoesDialogComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AlunoPeriodizacaoSeriesRepeticoesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
  }

}
