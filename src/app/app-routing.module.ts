import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PersonalProfileComponent } from './components/personal-profile/personal-profile.component';
import { EventsComponent } from './components/events/events.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { PublicProfileComponent } from './components/public-profile/public-profile.component';

const routes: Routes = [
{
  path: '',
  component: LoginComponent
},{
  path: 'Dashboard',
  component: DashboardComponent
},{
  path: 'Profile',
  component: PersonalProfileComponent
},{
  path: 'Events',
  component: EventsComponent
},{
  path: 'Users',
  component: PublicProfileComponent
},{
  path: 'Register',
  component: RegisterComponent
},{
  path: 'Admin',
  component: AdminPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
