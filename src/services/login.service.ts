import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ILoginData } from '../types/ILoginData';
import { $TOKEN_NAME, $USERNAME } from '../../envs';
import { BehaviorSubject, catchError, filter, map, of } from 'rxjs';
import { IAuthToken } from '../types/IAuthToken';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly apiService: ApiService) {
    this.checkUser();
  }
  private readonly $$isAuthorized = new BehaviorSubject<boolean>(false);
  readonly $isAuthorized = this.$$isAuthorized.asObservable();

  checkUser() {
    const token = localStorage.getItem($TOKEN_NAME);
    if (token) {
      this.$$isAuthorized.next(true);
    } else {
      this.$$isAuthorized.next(false);
    }
  }

  onLogin(data: ILoginData) {
    const { username } = data;
    return this.apiService.login().pipe(
      filter(Boolean),
      map((response: IAuthToken) => {
        this.saveUserData(username, response.token);
        this.$$isAuthorized.next(true);
      }),
      catchError(err => {
        this.$$isAuthorized.next(false);
        console.error(err);
        return of(false);
      })
    );
  }
  onLogout(){
    this.clearUserData()
    this.$$isAuthorized.next(false)
  }

  saveUserData(token: string, username: string) {
    localStorage.setItem($TOKEN_NAME, token);
    localStorage.setItem($USERNAME, username);
  }

  clearUserData() {
    localStorage.removeItem($TOKEN_NAME);
    localStorage.removeItem($USERNAME);
  }
}
