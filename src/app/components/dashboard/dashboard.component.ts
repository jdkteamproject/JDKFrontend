import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from '../../model/users/users.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private authService: AuthenticationService) {}

  currentUserId: number;

  currentUser: User = {
    id: null,
    email: '',
    username: '',
    password: '',
    reportedNum: null,
    region: '',
    category: '',
    favEvents: [],
    notifications: [],
    admin: false,
    banned: false
  }
  
  ngOnInit() {
    
    this.currentUserId = +window.localStorage.getItem('userId');
    this.dataService.getUserById(this.currentUserId).then((res)=>{
      this.currentUser = res;
      console.log(this.currentUser);
      this.getEvents();
    }).catch((e)=>console.log(e))
  }

  events: Object[] = [];

  getEvents(){
    this.dataService.get_AllUsersEvents(this.currentUser.category, this.currentUser.region).then((res)=>{
      const data = res;
      console.log(data._embedded);
      this.events = data._embedded.events;

    })
    .catch((e)=>console.log(e));
  }

  verifyAdmin(){
    if(this.currentUser.admin == true){
      return true;
    } else {
      return false;
    }
  }

  logout(){
    this.authService.logoutUser();
  }

}
