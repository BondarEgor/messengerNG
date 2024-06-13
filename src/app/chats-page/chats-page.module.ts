import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatsPageComponent } from './chats-page.component';

@NgModule({
  declarations: [ChatsPageComponent],
  imports: [CommonModule],
  exports: [ChatsPageComponent],
})
export class ChatsPageModule {}
