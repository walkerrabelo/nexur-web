import { AlunoTreinoEditComponent } from './aluno-treino/aluno-treino-edit/aluno-treino-edit.component';
import { AlunoTreinoModule } from './aluno-treino/aluno-treino.module';
import { FloatActionButtonAnimatedModule } from './../shared/float-action-button-animated/float-action-button-animated.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoAvaliacaoComponent } from './aluno-avaliacao/aluno-avaliacao.component';
import { MatIconModule, MatToolbarModule, MatDividerModule, MatTabsModule, MatTooltipModule, MatDialogModule } from '@angular/material';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';


@NgModule({
 entryComponents: [
    AlunoTreinoEditComponent
 ],
  declarations: [
    AlunoAvaliacaoComponent,
    AlunoComponent,
    AlunoListaComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatTabsModule,
    MatTooltipModule,
    FloatActionButtonAnimatedModule,
    MatDialogModule,
    AlunoTreinoModule
  ],
  exports: [
    AlunoComponent
  ]
})
export class AlunoModule { }
