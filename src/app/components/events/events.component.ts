import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

// private events = [];

  private eventsObservable : Observable<any>;

  constructor(private dataService: DataService) {

    this.eventsObservable = this.dataService.get_AllEvents();

   }

  ngOnInit() {
  }

}
