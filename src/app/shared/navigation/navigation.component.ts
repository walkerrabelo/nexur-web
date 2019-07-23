import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TokenService } from '../../services/autenticacao/token.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  currentRoute: string;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private tokenService: TokenService,
    private location: Location,
    private router: Router) {
      router.events.subscribe(val => {
        if (location.path() !== '') {
          this.currentRoute = this.location.path();
        } else {
          this.currentRoute = '';
        }
      });
    }
  logout() {
    this.tokenService.removeToken();
    this.router.navigate(['']);
  }
}
