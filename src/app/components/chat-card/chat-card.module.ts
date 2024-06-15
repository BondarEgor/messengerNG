import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatCardComponent } from './chat-card.component';
import { TuiAvatarModule, TuiLineClampModule } from '@taiga-ui/kit'
import { TuiCellModule } from '@taiga-ui/experimental'



@NgModule({
  declarations: [
    ChatCardComponent
  ],
  imports: [
    CommonModule,
    TuiAvatarModule,
    TuiLineClampModule,
    TuiCellModule
  ],exports:[ChatCardComponent]
})
export class ChatCardModule { }
