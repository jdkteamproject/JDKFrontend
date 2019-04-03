import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from '../../model/users/users.model';
import { userEvent } from 'src/app/model/userEvent/userEvent.model';
import { EventModel } from 'src/app/model/events/events.model';

@Component({
  selector: 'app-personal-profile', 
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.css']
})
export class PersonalProfileComponent implements OnInit {


  activeModal: boolean = false;

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
    this.event.e_sid = e_id;
    console.log(this.event);
    this.dataService.delete_SaveEvent(this.currentUser.id).then((res)=>{
      console.log(res);
    })
    .catch((e)=>console.log(e));
  }

  
  toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
