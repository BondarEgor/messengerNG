import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';
import { TuiButtonModule } from '@taiga-ui/core'

@NgModule({
  declarations: [TabComponent],
  imports: [CommonModule,TuiButtonModule],
  exports: [TabComponent],
})
export class TabModule {}
