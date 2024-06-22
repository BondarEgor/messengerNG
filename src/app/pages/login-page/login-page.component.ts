import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  testForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  isLoading = false
  isValid = false
  onLogin(){
    console.log('login clicked')
  }
}
