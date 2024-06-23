import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SidebarLinks } from '../../../types/SidebarLinks';
import { LoginService } from '../../../services/login.service';
import { SidebarService } from '../../../services/sidebar.service';
import { map, takeUntil, tap } from 'rxjs';
import { TuiDestroyService } from '@taiga-ui/cdk';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  readonly icons: SidebarLinks[] = [
    { src: 'tuiIconHomeLarge', link: '/home' },
    { src: 'tuiIconUserPlusLarge', link: '/new' },
    { src: 'tuiIconMessageSquareLarge', link: '/chats' },
    { src: 'tuiIconSettingsLarge', link: '/settings' },
  ];
  isAuth = false;

  constructor(
    private readonly sidebarService: SidebarService,
    private readonly loginService: LoginService,
    private readonly destroyService: TuiDestroyService
  ) {}

  ngOnInit(): void {
    this.loginService.$isAuthorized.pipe(
      tap(isAuthorized => {
        this.isAuth = isAuthorized;
      }),
      takeUntil(this.destroyService)
    ).subscribe()
  }

  onLogin() {
    this.sidebarService.onLogin(this.isAuth);
  }
}
