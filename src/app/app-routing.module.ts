import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ChatsPageComponent } from './pages/chats-page/chats-page.component';
import { AddContactPageComponent } from './pages/add-contact-page/add-contact-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { PageEnterGuard } from '../guards/page-enter.guard'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent,canActivate:[PageEnterGuard]  },
  { path: 'login', component: LoginPageComponent },
  { path: 'chats', component: ChatsPageComponent,canActivate:[PageEnterGuard] },
  { path: 'new', component: AddContactPageComponent,canActivate:[PageEnterGuard] },
  { path: 'settings', component: SettingsPageComponent,canActivate:[PageEnterGuard] },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
