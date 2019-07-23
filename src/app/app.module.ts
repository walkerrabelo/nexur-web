import { SignInModule } from './components/autenticacao/sign-in/sign-in.module';
import { AlunoModule } from './components/aluno/aluno.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MAT_DATE_LOCALE, MatNativeDateModule, MatIconModule,
   MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptors/http.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { environment } from '../environments/environment.prod';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { LoaderComponent } from './shared/loader/loader.component';
import { MatProgressBarModule } from '@angular/material';
import { HomeModule } from './components/home/home.module';
import { ExercicioModule } from './components/exercicio/exercicio.module';
import { AvaliacaoModule } from './components/avaliacao/avaliacao.module';
import { FinanceiroModule } from './components/financeiro/financeiro.module';
import { AulaModule } from './components/aula/aula.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    FlexLayoutModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    // This App Module
    AlunoModule,
    SignInModule,
    HomeModule,
    ExercicioModule,
    AvaliacaoModule,
    FinanceiroModule,
    AulaModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('Rodando em ambiente de ' + environment.ambiente);
  }
}
