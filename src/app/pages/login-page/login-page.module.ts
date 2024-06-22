import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiLoaderModule } from '@taiga-ui/core';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    TuiLoaderModule,
    ReactiveFormsModule,
    TuiInputPasswordModule,
    TuiInputModule,
  ],
  exports: [LoginPageComponent],
})
export class LoginPageModule {}
