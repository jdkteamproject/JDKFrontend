import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from '../../model/users/users.model';
import { userEvent } from 'src/app/model/userEvent/userEvent.model';
import { EventModel } from 'src/app/model/events/events.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-personal-profile', 
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.css']
})
export class PersonalProfileComponent implements OnInit {


  activeModal: boolean = false;

  constructor(
    private dataService: DataService,
    private authService: AuthenticationService) { }

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

  event: userEvent = {
    "e_id": 0,
    "e_sid": ""
  }

  ngOnInit() {
    this.currentUserId = +window.localStorage.getItem('userId');
    this.dataService.getUserById(this.currentUserId).then((res)=>{
      this.currentUser = res;
      this.getSavedEvents();
    }).catch((e)=>console.log(e))
  }
  
  events: EventModel[] = [];
  userEvents: userEvent[] = [];

  getSavedEvents(){
    this.dataService.get_UserSavedEvents(this.currentUser.id).then((res)=>{
      console.log("working?");
      let data = res;
      console.log(data);
      for(var i = 0; i < data.length; i++){
        this.events[i] = data[i];
      }
    })
    .catch((e)=>console.log(e));
  }

  deleteEvent(e_id: string){
    this.userEvents = this.currentUser.favEvents;
    for(var i = 0; i < this.userEvents.length; i++){
      if(this.userEvents[i].e_sid == e_id){
        this.userEvents.splice(i);
      }
    }
    this.currentUser.favEvents = this.userEvents;
    this.dataService.update(this.currentUser).then((res)=>{
      console.log(res);
    })
    .catch((e)=>console.log(e));
  }

  updateProfile(email: string, username: string, preference: string, city: string, pass1: string, pass2: string){
    this.currentUser.id = this.currentUser.id;
    if(email != ''){
      this.currentUser.email = email;
    } else {
      this.currentUser.email = this.currentUser.email;
    }

    if(username != ''){
      this.currentUser.username = username;
    } else {
      this.currentUser.username = this.currentUser.username;
    }
    
    if(preference != ''){
      this.currentUser.category = preference;
    } else {
      this.currentUser.category = this.currentUser.category;
    }

    if(city != ''){
      this.currentUser.region = city;
    } else {
      this.currentUser.region = this.currentUser.region;
    }
 
    if(pass1 == pass2){
      if(pass1 != ''){
        this.currentUser.password = pass1;
      } else {
        this.currentUser.password = this.currentUser.password;
      }

    this.currentUser.reportedNum = this.currentUser.reportedNum;
    this.currentUser.favEvents = this.currentUser.favEvents;
    this.currentUser.notifications = this.currentUser.notifications;
    this.currentUser.admin = this.currentUser.admin;
    this.currentUser.banned = this.currentUser.banned;

    this.dataService.update(this.currentUser).then((res) => {
      console.log("Updating user " + this.currentUser.username + ": " + res);
    }).catch((e) => {console.log(e)})
    console.log(this.currentUser);
    } else {
      console.log("Password don't match!");
    }
    
    

    

    
  }

  toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  logout(){
    this.authService.logoutUser();
  }

}
