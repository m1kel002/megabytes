import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './account/containers/welcome-page/welcome-page.component';
import { HomePageComponent } from './home/containers/home/home-page.component';
import { SignupComponent } from './account/components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
