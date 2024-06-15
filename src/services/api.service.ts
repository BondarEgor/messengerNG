import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { $API_BASE_URL } from '../../envs';
import { ChatCards } from '../types/ChatCards';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getChatCards(tab:string) {
    return this.http.get<ChatCards[]>(`${$API_BASE_URL}${tab}`);
  }
}
