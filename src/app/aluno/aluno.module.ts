import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoTreinoComponent } from './aluno-treino/aluno-treino.component';
import { AlunoExercicioComponent } from './aluno-exercicio/aluno-exercicio.component';
import { AlunoAvaliacaoComponent } from './aluno-avaliacao/aluno-avaliacao.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatGridListModule, MatCardModule,
  MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatDividerModule,
   MatExpansionModule, MatTabsModule, MatFormFieldModule, MatDialogModule,
   MatDatepickerModule, MatInputModule, MatRippleModule, MatTooltipModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';
import { AlunoExercicioModalEditComponent } from './aluno-exercicio/aluno-exercicio-modal-edit/aluno-exercicio-modal-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlunoTreinoEditComponent } from './aluno-treino/aluno-treino-edit/aluno-treino-edit.component';
import { ExercicioModule } from '../exercicio/exercicio.module';

@NgModule({
  entryComponents: [
    AlunoExercicioModalEditComponent
  ],
  declarations: [
    AlunoTreinoComponent,
    AlunoExercicioComponent,
    AlunoAvaliacaoComponent,
    AlunoComponent,
    AlunoListaComponent,
    AlunoExercicioModalEditComponent,
    AlunoTreinoEditComponent
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
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatRippleModule,
    MatTooltipModule,
    DragDropModule,
    ExercicioModule
  ],
  exports: [
    AlunoComponent
  ]
})
export class AlunoModule { }
