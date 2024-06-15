import { Component } from '@angular/core';
import { ChatService } from '../../../services/chat.service'

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent {
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
