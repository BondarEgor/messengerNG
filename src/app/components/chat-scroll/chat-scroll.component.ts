import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../services/chat.service';

@Component({
  selector: 'app-chat-scroll',
  templateUrl: './chat-scroll.component.html',
  styleUrl: './chat-scroll.component.css',
})
export class ChatScrollComponent  {
  constructor(private chatService: ChatService) {}
  isLoading = this.chatService.$isLoading;
}
