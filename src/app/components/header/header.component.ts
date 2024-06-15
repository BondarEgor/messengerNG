import { Component } from '@angular/core';
import './header.component.css';
import { ChatService } from '../../../services/chat.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private chatService: ChatService) {}
  tabs = [
    { endpoint: '/cards', text: 'All messages' },
    { endpoint: '/contacts', text: 'Contacts' },
    { endpoint: '/archived', text: 'Archived' },
    { endpoint: '/bin', text: 'Bin' },
  ];

  activeTab = this.tabs[0].endpoint;

  handleClick(tab: string) {
    this.activeTab = tab;
    this.chatService.getChatCards(tab)
  }
}
