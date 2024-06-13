import { Component } from '@angular/core';
import './header.component.css'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  tabs = [
    'All messages',
    'Contacts',
    'Archived',
    'Bin',
  ]
  
  activeTab = this.tabs[0]

  setActive(tab: string){
    this.activeTab = tab
  }
}
