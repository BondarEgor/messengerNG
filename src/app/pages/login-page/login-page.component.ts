import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { ILoginData } from '../../../types/ILoginData';
import { catchError, of, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  testForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onLogin() {
    if (!this.testForm.valid) return;

    const data = this.testForm.getRawValue() as ILoginData;
    this.loginService.onLogin(data).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
