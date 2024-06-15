import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatWindowComponent } from './chat-window.component';
import { TuiCellModule } from '@taiga-ui/experimental';
import { TuiAvatarModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core'

@NgModule({
  declarations: [ChatWindowComponent],
  imports: [
    CommonModule,
    TuiCellModule,
    TuiAvatarModule,
    TuiButtonModule
  ],
  exports: [ChatWindowComponent],
})
export class ChatWindowModule {}
