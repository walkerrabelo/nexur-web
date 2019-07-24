import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatToolbarModule, MatDividerModule, MatTabsModule, MatTooltipModule,
  MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule,
  MatRadioModule, MatBadgeModule, MatTableModule, MatPaginatorModule, MatSortModule, MatChipsModule, MatDatepickerModule } from '@angular/material';
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
import { AlunoService } from '../../services/aluno/aluno.service';
import { AlunoTreinoService } from '../../services/aluno/aluno-treino.service';
import { AlunoDataService } from '../../services/aluno/aluno-data.service';
import { AlunoFormDialogComponent } from './aluno-form/aluno-form-dialog/aluno-form-dialog.component';


@NgModule({
 entryComponents: [
    AlunoTreinoEditComponent,
    AlunoFormDialogComponent
 ],
  declarations: [
    AlunoComponent,
    AlunoListaComponent,
    AlunoFormComponent,
    AlunoFormDialogComponent,
  ],
  exports: [AlunoComponent, AlunoListaComponent],
  providers: [AlunoService, AlunoDataService, AlunoTreinoService ],
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
    MatDatepickerModule,
    // App Modules
    AlunoTreinoModule,
    AlunoAvaliacaoModule,
    AlunoNutricaoModule,
    AlunoPeriodizacaoModule,
  ]
})
export class AlunoModule { }
