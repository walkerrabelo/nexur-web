import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoTreinoComponent } from './aluno-treino/aluno-treino.component';
import { AlunoExercicioComponent } from './aluno-exercicio/aluno-exercicio.component';
import { AlunoAvaliacaoComponent } from './aluno-avaliacao/aluno-avaliacao.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatGridListModule, MatCardModule,
  MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatDividerModule,
   MatExpansionModule, MatTabsModule, MatFormFieldModule, MatDialogModule, MatDatepickerModule, MatInputModule, MatRippleModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';
import { AlunoExerciciosModalEditComponent } from './aluno-exercicio/aluno-exercicios-modal-edit/aluno-exercicios-modal-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  entryComponents: [
    AlunoExerciciosModalEditComponent
  ],
  declarations: [
    AlunoTreinoComponent,
    AlunoExercicioComponent,
    AlunoAvaliacaoComponent,
    AlunoComponent,
    AlunoListaComponent,
    AlunoExerciciosModalEditComponent
    
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
    MatRippleModule
  ],
  exports: [
    AlunoComponent
  ]
})
export class AlunoModule { }
