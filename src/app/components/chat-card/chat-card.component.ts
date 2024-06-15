import { Component } from '@angular/core';
import { ChatService } from '../../../services/chat.service'


@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrl: './chat-card.component.css',
})
export class ChatCardComponent {
  constructor (private chatService: ChatService){
    this.chatService.getChatCards('/cards')
  }
  cards = this.chatService.$chats
}
