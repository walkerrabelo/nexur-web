import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule, MatDatepickerModule, MatButtonModule,
  MatFormFieldModule, MatDialogModule, MatGridListModule, MatCardModule,
  MatTooltipModule, MatIconModule, MatExpansionModule, MatInputModule, MatSlideToggleModule,
  MatSelectModule, MatAutocompleteModule } from '@angular/material';
import { AlunoTreinoComponent } from './aluno-treino.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// tslint:disable-next-line: import-spacing
import { AlunoTreinoEditComponent } from './aluno-treino-edit/aluno-treino-edit.component';

// tslint:disable-next-line: max-line-length
import { AlunoTreinoExercicioDialogFormComponent } from './aluno-treino-exercicio/aluno-treino-exercicio-dialog-form/aluno-treino-exercicio-dialog-form.component';
import { AlunoTreinoExercicioComponent } from './aluno-treino-exercicio/aluno-treino-exercicio.component';
import { ExercicioModule } from '../../exercicio/exercicio.module';

@NgModule({
  entryComponents: [
    AlunoTreinoExercicioDialogFormComponent
  ],
  declarations: [
    AlunoTreinoComponent,
    AlunoTreinoEditComponent,
    AlunoTreinoExercicioComponent,
    AlunoTreinoExercicioDialogFormComponent
  ],
  exports: [AlunoTreinoComponent, AlunoTreinoEditComponent],
  imports: [
    CommonModule,
    MatRippleModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatTooltipModule,
    DragDropModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatAutocompleteModule,
    ExercicioModule
  ]
})
export class AlunoTreinoModule { }
