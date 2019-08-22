import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-aluno-periodizacao-series-repeticoes-dialog',
  templateUrl: './aluno-periodizacao-series-repeticoes-dialog.component.html',
  styleUrls: ['./aluno-periodizacao-series-repeticoes-dialog.component.css']
})
export class AlunoPeriodizacaoSeriesRepeticoesDialogComponent implements OnInit {

  form: FormGroup;
  treino: string;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AlunoPeriodizacaoSeriesRepeticoesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
    this.createForm();
    this.treino = this.data.treino;
    console.log('Treino: ', this.treino);
  }

  createForm() {
    this.form = this.formBuilder.group({
      seriesRepeticoes: this.data.seriesRepeticoes,
      observacoes: this.data.observacoes,
    });
  }

  save() {
    const serieRepeticoes: SeriesRepeticoesPeriodizacao = {
      seriesRepeticoes: this.form.get('seriesRepeticoes').value,
      observacoes: this.form.get('observacoes').value,
    };
    this.dialogRef.close(serieRepeticoes);
  }
  onNoClick() {
    this.dialogRef.close(null);
  }
}

interface SeriesRepeticoesPeriodizacao {
  seriesRepeticoes: string;
  observacoes: string;
}
