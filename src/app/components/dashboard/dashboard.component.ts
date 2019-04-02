import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getEvents();
  }

  events: Object[] = [];

  getEvents(){
    this.dataService.get_AllUsersEvents().then((res)=>{
      const data = res;
      console.log(data._embedded);
      this.events = data._embedded.events;

    })

    .catch((e)=>console.log(e));
  }

}
