import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.css'
})
export class ChatWindowComponent {
  buttons = [
    {icon:'tuiIconSearch'},
    {icon:'tuiIconPhone'},
    {icon:'tuiIconVideo'},
    {icon:'tuiIconMenu'}
  ]
}
