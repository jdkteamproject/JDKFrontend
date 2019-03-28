import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PersonalProfileComponent } from './components/personal-profile/personal-profile.component';
import { EventsComponent } from './components/events/events.component';

const routes: Routes = [
{
  path: 'Dashboard',
  component: DashboardComponent
},{
  path: 'Profile',
  component: PersonalProfileComponent
},{
  path: 'Events',
  component: EventsComponent
},{
  path: 'Register',
  component: RegisterComponent
},
{
  path: '',
  component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
