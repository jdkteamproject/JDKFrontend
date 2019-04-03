import { Component, OnInit } from '@angular/core';
import { User } from "../../model/users/users.model";
import { userEvent } from 'src/app/model/userEvent/userEvent.model';
import { userNotification } from 'src/app/model/userNotification/userNotification.model';
import { DataService } from 'src/app/services/data.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private dataService: DataService) { }

  cities: any[] = [];
  categories: any[] = [];

  
  public User : User = {
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

  registerUser(
    email: string, 
    username: string, 
    password: string, 
    reportedNum: number, 
    region: string,
    category: string,
    favEvents: userEvent[],
    notifications: userNotification[],
    admin: false,
    banned: false){

  }

    ngOnInit() {
    this.dataService.getAllCities();
    this.populateCities();
    // this.populateCategories();
  }

  

  populateCities(){
    this.dataService.getAllCities().then((res) => {
      const data = res;
      this.cities = data;
    })
    .catch((e) => console.log(e));
  }

  // populateCategories(){
  //   this.dataService.getAllCategories().then((res) => {
  //     const data = res;
  //     this.categories = data;
  //   })
  //   .catch((e) => console.log(e));
  // }
}
