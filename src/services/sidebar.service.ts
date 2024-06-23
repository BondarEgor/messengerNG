import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TuiDialogService } from '@taiga-ui/core';
import { LoginService } from './login.service';
import { TuiPromptData, TUI_PROMPT } from '@taiga-ui/kit';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router,
    private readonly dialogService: TuiDialogService
  ) {}
  private readonly dialogData = {
    promptData: {
      yes: 'That is great!',
      no: 'Who cares?',
    }
  };

  onLogin(isAuth: boolean) {
    if (!isAuth) {
      this.router.navigate(['/login']);
      return;
    } else {
      this.showDialogWindow().subscribe(response => {
        if (response) {
          this.loginService.onLogout();
          this.router.navigate(['/login']);
        }
      });
    }
  }

  showDialogWindow() {
    const data: TuiPromptData = this.dialogData.promptData;
    return this.dialogService.open<boolean>(TUI_PROMPT, {
      label: 'If you proceed, you will be logged out',
      size: 's',
      data,
    });
  }
}
