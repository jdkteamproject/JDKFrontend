import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EventModel } from "src/app/model/events/events.model";
import { User } from "src/app/model/users/users.model";



import {Observable} from 'rxjs';
import { userEvent } from '../model/userEvent/userEvent.model';




@Injectable({
  providedIn: "root"
})

export class DataService {
  tester: User = {
    "id": 50,
    "email": "shimjay1@gmail.com",
    "username": "magikarp",
    "password": "123",
    "reportedNum": 0,
    "region": "New York",
    "category": 'sports',
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

  baseUrl: string = "http://3.16.216.95:8085/cue";
  citiesUrl: string = "http://3.16.216.95:8085/cue/info/cities";


  constructor(private http: HttpClient) {}

  get_AllEvents(): Promise<EventModel> {
    return this.http.get<EventModel>(`${this.baseUrl}/api`).toPromise();
  }

  get_SearchAllEvents(keyword: string, searchword: string): Promise<EventModel> {
    console.log(`${this.baseUrl}/api?`+keyword+`=`+searchword);
    return this.http.get<EventModel>(`${this.baseUrl}/api?`+keyword+`=`+searchword).toPromise();
  }

  get_AllUsersEvents(category: string, region: string): Promise<EventModel> {
    if(category == null || category == ""){
      category = "%20";
    }
    if(region == null || region == ""){
      region = "%20";
    }
    let url: string = `${this.baseUrl}/api?category=${category}&city=${region}`;
    console.log(url);
    return this.http.get<EventModel>(url).toPromise();
  }

  // post_SaveEvent(eventId: string, event: EventModel): Observable<EventModel> {
    // return this.http.post(`${this.baseUrl}/`+eventId+`events`, event);
  //  }

  post_SaveEvent(Id: number, event: userEvent): Promise<boolean>{ 
   return this.http.post<boolean>(`${this.baseUrl}/users/`+Id+"/events", event).toPromise();
  }

  // post_SaveEvent()

  

  // post_SaveEvent()
    
  


  get_AllSavedUsersEvents(): Promise<EventModel> {
    return this.http.get<EventModel>(`${this.baseUrl}/api`).toPromise();
  }


  getAllUsers() {
    return this.http.get<User[]>(`${this.baseUrl}/users/all`);
  }


  getUserId(email: string, password: string){
    let idNum = JSON.stringify(this.http.get(`${this.baseUrl}/login?email=${email}&password=${password}`));
    return idNum;
  }

  getId(email: string, password: string): Observable<number>{
    return this.http.get<number>(`${this.baseUrl}/login?email=${email}&password=${password}`);
  }

 

  getUserById(id: number): Promise<User> {
    return this.http.get<User>(`${this.baseUrl}/users/` + id).toPromise();

  }

  getAllCities(): Promise<any>{
    return this.http.get<any>(`${this.baseUrl}/info/cities`).toPromise();
  }

  // getAllCategories(): Promise<any>{
  //   return this.http.get<any>(`${this.baseUrl}`).toPromise();
  // }

  register(user: User) {
    return this.http.post(`${this.baseUrl}/users/`, user);
  }

  update(user: User) {
    return this.http.put(`${this.baseUrl}/users/` + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/users/` + id);
  }
}