import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatToolbarModule, MatDividerModule, MatTabsModule, MatTooltipModule,
  MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule,
  MatRadioModule, MatBadgeModule, MatTableModule, MatPaginatorModule, MatSortModule,
  MatChipsModule, MatDatepickerModule } from '@angular/material';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { MatCardModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AlunoAvaliacaoModule } from './aluno-avaliacao/aluno-avaliacao.module';
import { AlunoNutricaoModule } from './aluno-nutricao/aluno-nutricao.module';
import { AlunoPeriodizacaoModule } from './aluno-periodizacao/aluno-periodizacao.module';
import { AlunoTreinoModule } from './aluno-treino/aluno-treino.module';
import { AlunoService } from '../../services/aluno/aluno.service';
import { AlunoTreinoService } from '../../services/aluno/aluno-treino.service';
import { AlunoDataService } from '../../services/aluno/aluno-data.service';
import { AlunoFormDialogComponent } from './aluno-form/aluno-form-dialog/aluno-form-dialog.component';
import { DateToNowModule } from '../../shared/pipes/date-to-now/date-to-now.module';
import { ExercicioUsuarioService } from 'src/app/services/exercicio/exercicio-usuario.service';
import { AlunoTreinoNovoComponent } from './aluno-treino/aluno-treino-novo/aluno-treino-novo.component';


@NgModule({
 entryComponents: [
    AlunoTreinoNovoComponent,
    AlunoFormDialogComponent
 ],
  declarations: [
    AlunoComponent,
    AlunoListaComponent,
    AlunoFormComponent,
    AlunoTreinoNovoComponent,
    AlunoFormDialogComponent,
  ],
  exports: [AlunoComponent, AlunoListaComponent],
  providers: [AlunoService, AlunoDataService, AlunoTreinoService, ExercicioUsuarioService ],
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
    MatRadioModule,
    MatBadgeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatDatepickerModule,
    // App Modules
    AlunoTreinoModule,
    AlunoAvaliacaoModule,
    AlunoNutricaoModule,
    AlunoPeriodizacaoModule,
    DateToNowModule
  ]
})
export class AlunoModule { }
