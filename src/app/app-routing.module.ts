import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoListaComponent } from './components/aluno/aluno-lista/aluno-lista.component';
import { AlunoComponent } from './components/aluno/aluno/aluno.component';
import { SignInComponent } from './components/autenticacao/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: SignInComponent},
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
