import { AlunoTreinoEditComponent } from './aluno-treino/aluno-treino-edit/aluno-treino-edit.component';
import { AlunoTreinoModule } from './aluno-treino/aluno-treino.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoAvaliacaoComponent } from './aluno-avaliacao/aluno-avaliacao.component';
import { MatIconModule, MatToolbarModule, MatDividerModule, MatTabsModule, MatTooltipModule,
  MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatBadgeModule, MatTableModule, MatPaginatorModule, MatSortModule, MatChipsModule } from '@angular/material';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { MatCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
 entryComponents: [
    AlunoTreinoEditComponent
 ],
  declarations: [
    AlunoAvaliacaoComponent,
    AlunoComponent,
    AlunoListaComponent,
    AlunoFormComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTooltipModule,
    MatRadioModule,
    MatBadgeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    AlunoTreinoModule,
  ],
  exports: [
    AlunoComponent,
    AlunoListaComponent
  ]
})
export class AlunoModule { }
