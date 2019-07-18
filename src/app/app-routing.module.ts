import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoListaComponent } from './aluno/aluno-lista/aluno-lista.component';
import { AlunoComponent } from './aluno/aluno/aluno.component';

const routes: Routes = [
  { path: '', component: AlunoListaComponent},
  { path: 'alunos', component: AlunoListaComponent},
  { path: 'aluno', component: AlunoComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
