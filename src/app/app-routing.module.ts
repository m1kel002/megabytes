import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './home/containers/welcome-page/welcome-page.component';
import { HomePageComponent } from './home/containers/home/home-page.component';

const routes: Routes = [{
  path: '',
  component: WelcomePageComponent
},
{
  path: 'home',
  component: HomePageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
