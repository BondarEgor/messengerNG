import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { Store } from '@ngrx/store';
import { selectAllChatCards } from '../../selectors/char-card.selectors';
import { loadChatCards } from '../../actions/chat-card.action';
import { Observable } from 'rxjs'
import { ChatCards } from '../../../types/ChatCards'

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrl: './chat-card.component.css',
})
export class ChatCardComponent implements OnInit {
  cards$!:Observable<ChatCards[]>
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.cards$ = this.store.select(selectAllChatCards);
    this.cards$.subscribe(cards => {
      if (!cards?.length) {
        this.store.dispatch(loadChatCards({ tab: '/cards' }));
      }
    });
  }
}
