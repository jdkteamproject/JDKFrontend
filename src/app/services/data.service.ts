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

  baseUrl: string = "http://3.16.216.95:8085/cue";
  citiesUrl: string = "http://3.16.216.95:8085/cue/info/cities";


  constructor(private http: HttpClient) {}

  get_AllEvents(): Promise<EventModel> {
    return this.http.get<EventModel>(`${this.baseUrl}/api`).toPromise();
  }

  get_SearchAllEvents(selectedKeyword: string, selectedCategory: string, selectedRegion: string): Promise<EventModel> {
    if(selectedCategory == "All Categories"){
      selectedCategory = "";
    }
    console.log("Selected Region is: " + selectedRegion);
    if(selectedRegion == "All Cities"){
      selectedRegion = "";
    }
    selectedKeyword.replace(" ", "%20");
    selectedCategory.replace(" ", "%20");
    selectedRegion.replace(" ", "%20");

    console.log(`${this.baseUrl}/api?keyword=`+selectedKeyword+`&category=`+selectedCategory+`&city=`+selectedRegion);
    return this.http.get<EventModel>(`${this.baseUrl}/api?keyword=`+selectedKeyword+`&category=`+selectedCategory+`&city=`+selectedRegion).toPromise();
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

 

  post_SaveEvent(Id: number, event: userEvent): Promise<boolean>{ 
   return this.http.post<boolean>(`${this.baseUrl}/users/`+Id+"/events", event).toPromise();
  }


  get_UserSavedEvents(Id: number): Promise<EventModel[]>{
    return this.http.get<EventModel[]>(`${this.baseUrl}/users/`+Id+"/events").toPromise();
  }  
  


  get_AllSavedUsersEvents(): Promise<EventModel> {
    return this.http.get<EventModel>(`${this.baseUrl}/api`).toPromise();
  }


  getAllUsers(): Promise<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`).toPromise();
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


  getAllCategories(): Promise<any>{
    return this.http.get<any>(`${this.baseUrl}/info/categories`).toPromise();
  }


  register(user: User): Promise<boolean>{
    return this.http.post<boolean>(`${this.baseUrl}/users/`, user).toPromise();
  }

  update(user: User): Promise<boolean>{
    return this.http.put<boolean>(`${this.baseUrl}/users/` + user.id, user).toPromise();
  }

  delete(id: Number): Promise<boolean> {
    console.log(`${this.baseUrl}/users/` + id);
    return this.http.delete<boolean>(`${this.baseUrl}/users/` + id).toPromise();
  }


}