import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from '../../model/users/users.model';

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.css']
})
export class PersonalProfileComponent implements OnInit {

  constructor(
    private dataService: DataService) { }

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
    this.getEvents();
    this.currentUserId = +window.localStorage.getItem('userId');
    this.dataService.getUserById(this.currentUserId).then((res)=>{
    this.currentUser = res;
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

}
