import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from './shared/loader/loader.service';
import { LoaderState } from './shared/loader/loader';
import { ExercicioUsuarioDataService } from './services/exercicio/exercicio-usuario-data.service';
import { TokenService } from './services/autenticacao/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{

  title = 'Nexur';

  showLoader = false;
  private subscription: Subscription;
  constructor(
    private loaderService: LoaderService,
    private tokenService: TokenService,
    private exercicioUsuarioDataService: ExercicioUsuarioDataService) { }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState
    .subscribe((state: LoaderState) => {
      this.showLoader = state.show;
    });
    if (this.tokenService.hasToken()) {
      this.exercicioUsuarioDataService.loadList();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
