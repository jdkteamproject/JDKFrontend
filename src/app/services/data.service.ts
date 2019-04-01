import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EventModel } from "src/app/model/events/events.model";
import { Friend } from "src/app/model/users/users.model";
import { from } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  baseUrl: string = "http://3.16.216.95:8085/cue";

  constructor(private http: HttpClient) {}

  get_AllEvents(): Promise<EventModel> {
    return this.http.get<EventModel>(`${this.baseUrl}/api`).toPromise();
  }

  getAllUsers() {
    return this.http.get<Friend[]>(`${this.baseUrl}/users/all`);
  }
  getUserById(id: number) {
    return this.http.get(`${this.baseUrl}/user/` + id);
  }

  register(user: Friend) {
    return this.http.post(`${this.baseUrl}/user/`, user);
  }

  update(user: Friend) {
    return this.http.put(`${this.baseUrl}/user/` + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/user/` + id);
  }
}
