import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoListaComponent } from './components/aluno/aluno-lista/aluno-lista.component';
import { AlunoComponent } from './components/aluno/aluno/aluno.component';
import { SignInComponent } from './components/autenticacao/sign-in/sign-in.component';
import { AuthGuardService } from './services/autenticacao/authguard/auth-guard.service';
import { AuthGuardAdminService } from './services/autenticacao/authguard/auth-guard-admin.service';
import { AulaComponent } from './components/aula/aula.component';
import { AvaliacaoComponent } from './components/avaliacao/avaliacao.component';
import { ExercicioComponent } from './components/exercicio/exercicio.component';
import { FinanceiroComponent } from './components/financeiro/financeiro.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', component: SignInComponent, canActivate: [AuthGuardService]},
  { path: 'alunos', component: AlunoListaComponent, canActivate: [AuthGuardAdminService]},
  { path: 'aluno', component: AlunoComponent, canActivate: [AuthGuardAdminService]},
  { path: 'aulas', component: AulaComponent, canActivate: [AuthGuardAdminService]},
  { path: 'avaliacoes', component: AvaliacaoComponent, canActivate: [AuthGuardAdminService]},
  { path: 'exercicios', component: ExercicioComponent, canActivate: [AuthGuardAdminService]},
  { path: 'financeiro', component: FinanceiroComponent, canActivate: [AuthGuardAdminService]},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardAdminService]},
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
