import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, delay, tap } from 'rxjs';
import { ChatCards } from '../types/ChatCards';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private apiService: ApiService) {}

  private $$chats = new BehaviorSubject<ChatCards[] | null>(null);
  public $chats = this.$$chats.asObservable();
  private $$isLoading = new BehaviorSubject<boolean>(false)
  public $isLoading = this.$$isLoading.asObservable()
  
  getChatCards(tab: string) {
    this.$$isLoading.next(true)
    this.$$chats.next(null);
    this.apiService
      .getChatCards(tab)
      .pipe(
        // delay(2000),
        tap(chats => {
          this.$$chats.next(chats)
          this.$$isLoading.next(false)
        })
      )
      .subscribe();
  }
}
