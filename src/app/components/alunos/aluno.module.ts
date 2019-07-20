import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoAvaliacaoComponent } from './aluno-avaliacao/aluno-avaliacao.component';
import { MatIconModule, MatToolbarModule, MatDividerModule, MatTabsModule, MatTooltipModule,
  MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule,
  MatRadioModule, MatBadgeModule, MatTableModule, MatPaginatorModule, MatSortModule, MatChipsModule } from '@angular/material';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { MatCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AlunoAvaliacaoModule } from './aluno-avaliacao/aluno-avaliacao.module';
import { AlunoNutricaoModule } from './aluno-nutricao/aluno-nutricao.module';
import { AlunoPeriodizacaoModule } from './aluno-periodizacao/aluno-periodizacao.module';
import { AlunoTreinoEditComponent } from './aluno-treino/aluno-treino-edit/aluno-treino-edit.component';
import { AlunoTreinoModule } from './aluno-treino/aluno-treino.module';


@NgModule({
 entryComponents: [
    AlunoTreinoEditComponent
 ],
  declarations: [
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

    // App Modules
    AlunoTreinoModule,
    AlunoAvaliacaoModule,
    AlunoNutricaoModule,
    AlunoPeriodizacaoModule
  ],
  exports: [
    AlunoComponent,
    AlunoListaComponent
  ]
})
export class AlunoModule { }
