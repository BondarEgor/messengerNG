import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { $API_BASE_URL, $TOKEN_NAME, $USERNAME } from '../../envs';
import { ChatCards } from '../types/ChatCards';
import { ILoginData } from '../types/ILoginData';
import {
  catchError,
  of,
  tap,
} from 'rxjs';
import { IAuthToken } from '../types/IAuthToken';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

 

  getChatCards(tab: string) {
    return this.http.get<ChatCards[]>(`${$API_BASE_URL}${tab}`);
  }

  login() {
    return this.http.get<IAuthToken>(`${$API_BASE_URL}/login`)
  }
  
}
