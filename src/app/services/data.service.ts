import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EventModel } from "src/app/model/events/events.model";
import { User } from "src/app/model/users/users.model";
import { from, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
 tester = {
    id: 500,
    email: "kuku",
    username: "gkugkg",
    password: "jgjkg",
    reportedNum: 0,
    region: "Tampa",
    category: "Sports",
    favEvents: [],
    friends: [],
    admin: false,
    banned: false
  };

  baseUrl: string = "http://3.16.216.95:8085/cue";

  constructor(private http: HttpClient) {}

  get_AllEvents(): Promise<EventModel> {
    return this.http.get<EventModel>(`${this.baseUrl}/api`).toPromise();
  }

  get_SearchAllEvents(keyword: string, searchword: string): Promise<EventModel> {
    console.log(`${this.baseUrl}/api?`+keyword+`=`+searchword);
    return this.http.get<EventModel>(`${this.baseUrl}/api?`+keyword+`=`+searchword).toPromise();
  }

  get_AllUsersEvents(): Promise<EventModel> {
    return this.http.get<EventModel>(`${this.baseUrl}/api?category=${this.tester.category}&city=${this.tester.region}`).toPromise();
  }

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

  getUserById(id: number) {
    return this.http.get<User>(`${this.baseUrl}/user/` + id);
  }

  register(user: User) {
    return this.http.post(`${this.baseUrl}/user/`, user);
  }

  update(user: User) {
    return this.http.put(`${this.baseUrl}/user/` + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/user/` + id);
  }
}