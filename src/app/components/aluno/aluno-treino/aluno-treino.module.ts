import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule, MatDatepickerModule, MatButtonModule,
  MatFormFieldModule, MatDialogModule, MatGridListModule, MatCardModule,
  MatTooltipModule, MatIconModule, MatExpansionModule, MatInputModule, MatSlideToggleModule,
  MatSelectModule, MatAutocompleteModule, MatDividerModule} from '@angular/material';
import { AlunoTreinoComponent } from './aluno-treino.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// tslint:disable-next-line: import-spacing

// tslint:disable-next-line: max-line-length
import { AlunoTreinoExercicioDialogFormComponent } from './aluno-treino-exercicio/aluno-treino-exercicio-dialog-form/aluno-treino-exercicio-dialog-form.component';
import { AlunoTreinoExercicioComponent } from './aluno-treino-exercicio/aluno-treino-exercicio.component';
import { ExercicioModule } from '../../exercicio/exercicio.module';
import { AlunoTreinoService } from '../../../services/aluno/aluno-treino.service';
// tslint:disable-next-line: max-line-length
import { AlunoTreinoExercicioNovoComponent } from './aluno-treino-exercicio/aluno-treino-exercicio-novo/aluno-treino-exercicio-novo.component';
import { AlunoTreinoEditarComponent } from './aluno-treino-editar/aluno-treino-editar.component';
import { IntervalDateModule } from '../../../shared/pipes/interval-date/interval-date.module';

@NgModule({
  entryComponents: [
    AlunoTreinoExercicioDialogFormComponent,
    AlunoTreinoExercicioNovoComponent,
    AlunoTreinoEditarComponent
  ],
  declarations: [
    AlunoTreinoComponent,
    AlunoTreinoExercicioComponent,
    AlunoTreinoExercicioDialogFormComponent,
    AlunoTreinoExercicioNovoComponent,
    AlunoTreinoEditarComponent
  ],
  exports: [AlunoTreinoComponent],
  providers: [AlunoTreinoService],
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
    MatDividerModule,
    IntervalDateModule,
    ExercicioModule
  ]
})
export class AlunoTreinoModule { }
