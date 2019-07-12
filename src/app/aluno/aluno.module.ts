import { AlunoTreinoModule } from './aluno-treino/aluno-treino.module';
import { FloatActionButtonAnimatedModule } from './../shared/float-action-button-animated/float-action-button-animated.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoAvaliacaoComponent } from './aluno-avaliacao/aluno-avaliacao.component';
import { MatIconModule, MatToolbarModule, MatDividerModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';


@NgModule({

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
    AlunoTreinoModule
  ],
  exports: [
    AlunoComponent
  ]
})
export class AlunoModule { }
