import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HeaderModule } from '../../components/header/header.module';
import { ChatScrollModule } from '../../components/chat-scroll/chat-scroll.module'
import { ChatWindowModule } from '../../components/chat-window/chat-window.module'

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HeaderModule,ChatScrollModule,ChatWindowModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
