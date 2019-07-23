import { Injectable } from '@angular/core';

const TOKEN_NAME = 'nexurAuthToken';
const USER_NAME = 'nexurUserName';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  hasToken(): boolean {
    return !!this.getToken();
  }

  setToken(token: string, userName: string) {
    window.localStorage.setItem(`${TOKEN_NAME}`, token);
    window.localStorage.setItem(`${USER_NAME}`, userName);
  }

  getToken() {
    return window.localStorage.getItem(`${TOKEN_NAME}`);
  }

  getUserName() {
    return window.localStorage.getItem(`${USER_NAME}`);
  }

  removeToken() {
    window.localStorage.removeItem(`${TOKEN_NAME}`);
    window.localStorage.removeItem(`${USER_NAME}`);
  }
}
