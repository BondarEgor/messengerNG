import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { TuiButtonModule, TuiLinkModule, TuiSvgModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';
import { TuiPromptModule } from '@taiga-ui/kit';
import { TuiDestroyService } from '@taiga-ui/cdk'
@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    TuiSvgModule,
    TuiButtonModule,
    TuiLinkModule,
    RouterModule,
    TuiPromptModule,
  ],
  providers:[TuiDestroyService],
  exports: [SidebarComponent],
})
export class SidebarModule {}
