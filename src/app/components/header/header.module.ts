import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ReactiveFormsModule } from '@angular/forms'
import {TuiAvatarModule, TuiInputModule} from '@taiga-ui/kit';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core'

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiAvatarModule,
    TuiTextfieldControllerModule,
    TuiButtonModule
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
