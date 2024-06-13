import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrl: './chat-card.component.css'
})
export class ChatCardComponent {
  cards = [
    {avatar:'E B', name: 'Egor Bondar', time: "9:14 am"},
    {avatar:'E B', name: 'Egor Bondar', time: "9:14 am"},
    {avatar:'E B', name: 'Egor Bondar', time: "9:14 am"},{avatar:'E B', name: 'Egor Bondar', time: "9:14 am"},{avatar:'E B', name: 'Egor Bondar', time: "9:14 am"},
  ]
}
