import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatCardComponent } from './chat-card.component';
import { TuiAvatarModule, TuiLineClampModule } from '@taiga-ui/kit'



@NgModule({
  declarations: [
    ChatCardComponent
  ],
  imports: [
    CommonModule,
    TuiAvatarModule,
    TuiLineClampModule
  ],exports:[ChatCardComponent]
})
export class ChatCardModule { }
