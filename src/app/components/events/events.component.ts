import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/model/users/users.model';
import { userEvent } from 'src/app/model/userEvent/userEvent.model';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  // template:  `<button (click)="onClickMe()">Search</button>`
})
export class EventsComponent implements OnInit {

  constructor(private dataService: DataService) {}

  selectedKeyword: string = "";
  printedKeyword: string;
  searchWord: string = "";
  eventId: string = "";

  keywords = [
    { name: "name", value: 1 },
    { name: "category", value: 2 },
    { name: "city", value: 3}
  ]

  tester: User = {
    "id": 50,
    "email": "shimjay1@gmail.com",
    "username": "magikarp",
    "password": "123",
    "reportedNum": 0,
    "region": "New York",
    "category": null,
    "favEvents": [],
    "notifications": [
    {
    "id": 50,
    "message": "You've got mail!"
    }
    ],
    "admin": false,
    "banned": false
    };

  event: userEvent = {
    "e_id": Math.floor(Math.random()*100),
    "e_sid": ""
  }

  ngOnInit() {
   
  }


  events: Object[] = [];

  getEvents(){
    this.dataService.get_SearchAllEvents(this.selectedKeyword, this.searchWord).then((res)=>{
      const data = res;
      console.log(data._embedded);
      this.events = data._embedded.events;

    })

    .catch((e)=>console.log(e));
  }

  saveEvent(e_id: string){
    this.event.e_sid = e_id;
    console.log(this.event);
    this.dataService.post_SaveEvent(50, this.event).then((res)=>{
      console.log(res);
    })
    .catch((e)=>console.log(e));
  }



  toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
