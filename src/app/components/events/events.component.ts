import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/model/users/users.model';
import { userEvent } from 'src/app/model/userEvent/userEvent.model';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  // template:  `<button (click)="onClickMe()">Search</button>`
})
export class EventsComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private authService: AuthenticationService) {}

  selectedKeyword: string = "";
  selectedRegion: string = "Baltimore";
  selectedCategory: string = "Arts";
  eventId: string = "";
  cities: any[] = [];
  categories: any[] = [];
  message: string = "";
  color: string;


  keywords = [
    { name: "name", value: 1 },
    { name: "category", value: 2 },
    { name: "city", value: 3}
  ]

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
    "e_id": Math.floor(Math.random()*100),
    "e_sid": ""
  }

  ngOnInit() {
    this.currentUserId = +window.localStorage.getItem('userId');
    this.dataService.getAllCities();
    this.populateCities();
    this.populateCategories();
    
    this.dataService.getUserById(this.currentUserId).then((res)=>{
      this.currentUser = res;
      console.log(this.currentUser);
      this.getEventsStart();
    }).catch((e)=>console.log(e))
  }

  populateCategories(){
    this.dataService.getAllCategories().then((res) => {
      const data = res;
      this.categories = data;
      this.categories.push("Any Category");
    })
    .catch((e) => console.log(e));
  }

  populateCities(){
    this.dataService.getAllCities().then((res) => {
      const data = res;
      this.cities = data;
      this.cities.push("All Cities");
    })
    .catch((e) => console.log(e));
  }

 
  events: Object[] = [];
  

  getEventsStart(){
    console.log("In Events.ts: Selected Region is: " + this.selectedRegion);
    this.dataService.get_SearchAllEvents("", "", "").then((res)=>{
      const data = res;
      if(data != undefined || data != null){
        this.events = data._embedded.events;
      } else {
         this.events = [];
      }

    })

    .catch((e)=>console.log(e));
  }

  getEvents(){
    console.log("In Events.ts: Selected Region is: " + this.selectedRegion);
    this.dataService.get_SearchAllEvents(this.selectedKeyword, this.selectedCategory, this.selectedRegion).then((res)=>{
      const data = res;
      if(data != undefined || data != null){
        this.events = data._embedded.events;
      } else {
         this.events = [];
      }

    })
    .catch((e)=>console.log(e));
  }

  saveEvent(e_id: string){
    console.log("made it here");
    console.log(this.currentUser.id);
    this.event.e_sid = e_id;
    console.log("This is the event id of saved event");
    console.log(this.event);
    this.dataService.post_SaveEvent(this.currentUser.id, this.event).then((res)=>{
      console.log(res);
      if(res){
        this.color = "green";
        this.message = "Event " + e_id + " Succesfully Saved!";
      } else{
        this.color = "red";
        this.message = "Event " + e_id + " is already saved.";
      }
      
    })
    .catch((e)=>{
      console.log(e)
    });
  }

  verifyAdmin(){
    if(this.currentUser.admin == true){
      return true;
    } else {
      return false;
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
