import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { TokenService } from './token.service';


const ENDPOINT = 'auth/login';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  authenticate(login: string, password: string) {
    return this.http
    .post(
      `${environment.api_url}/${ENDPOINT}`,
      { login, password },
      { observe: 'response'}
    )
    .pipe(tap(response => {
      // tslint:disable-next-line: no-string-literal
      const token = response.body['hash'];
      this.tokenService.setToken(token, login);
      console.log(`User ${login} authenticated with token ${token}`);
    }));
  }
}
