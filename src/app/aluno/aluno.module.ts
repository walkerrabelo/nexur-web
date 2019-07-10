import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoTreinoComponent } from './aluno-treino/aluno-treino.component';
import { AlunoExercicioComponent } from './aluno-exercicio/aluno-exercicio.component';
import { AlunoAvaliacaoComponent } from './aluno-avaliacao/aluno-avaliacao.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatGridListModule, MatCardModule,
  MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatDividerModule, MatExpansionModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { AlunoComponent } from './aluno/aluno.component';

@NgModule({
  declarations: [
    AlunoTreinoComponent,
    AlunoExercicioComponent,
    AlunoAvaliacaoComponent,
    AlunoComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    DragDropModule,
    MatToolbarModule,
    MatDividerModule,
    MatExpansionModule
  ],
  exports: [
    AlunoComponent
  ]
})
export class AlunoModule { }
