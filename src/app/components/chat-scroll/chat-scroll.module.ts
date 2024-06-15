import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatScrollComponent } from './chat-scroll.component';
import { TuiCardModule } from '@taiga-ui/experimental';
import { ChatCardModule } from '../chat-card/chat-card.module';
import { TuiLoaderModule } from '@taiga-ui/core';

@NgModule({
  declarations: [ChatScrollComponent],
  imports: [CommonModule, TuiCardModule, ChatCardModule, TuiLoaderModule],
  exports: [ChatScrollComponent],
})
export class ChatScrollModule {}
