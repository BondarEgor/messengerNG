import { Component } from '@angular/core';
import { SidebarLinks } from '../../../types/SidebarLinks';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  readonly icons: SidebarLinks[] = [
    { src: 'tuiIconHomeLarge', link: '/home' },
    { src: 'tuiIconUserPlusLarge', link: '/new' },
    { src: 'tuiIconMessageSquareLarge', link: '/chats' },
    { src: 'tuiIconSettingsLarge', link: '/settings' },
  ];
}
