import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './account/containers/welcome-page/welcome-page.component';
import { HomePageComponent } from './home/containers/home/home-page.component';
import { AuthGuard } from './shared/services/auth.guard';
import { BlankComponent } from './shared/containers/blank/blank.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: BlankComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
