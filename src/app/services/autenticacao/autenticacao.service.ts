import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

const ENDPOINT = 'auth/login';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient) { }

  authenticate(login: string, password: string) {
    return this.http.post(`${environment.api_url}/${ENDPOINT}`, {login, password});
  }
}
