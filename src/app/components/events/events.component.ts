import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


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

  keywords = [
    { name: "name", value: 1 },
    { name: "category", value: 2 },
    { name: "city", value: 3}
  ]

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
}
