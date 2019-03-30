import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getEvents();
  }

  events: Object[] = [];

  getEvents(){
    this.dataService.get_AllEvents().then((res)=>{
      const data = res;
      console.log(data._embedded);
      this.events = data._embedded.events;

    })

    .catch((e)=>console.log(e));
  }
}
