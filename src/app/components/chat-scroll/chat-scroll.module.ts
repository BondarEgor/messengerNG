import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatScrollComponent } from './chat-scroll.component';
import {TuiCardModule} from '@taiga-ui/experimental';
import { ChatCardModule } from '../chat-card/chat-card.module'



@NgModule({
  declarations: [ChatScrollComponent],
  imports: [CommonModule,TuiCardModule,ChatCardModule],
  exports: [ChatScrollComponent],
})
export class ChatScrollModule {}
