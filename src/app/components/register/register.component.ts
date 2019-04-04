import { Component, OnInit } from '@angular/core';
import { User } from "../../model/users/users.model";
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import {FormsModule, EmailValidator} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
    private dataService: DataService) { }

  cities: any[] = [];
  categories: any[] = [];

  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }
  
  User : User = {
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

  registerUser(email: string, username: string, password1: string, password2: string, region: string, preference: string){
    this.User.email = email;
    this.User.username = username;
    this.User.reportedNum = 0;
    this.User.region = region;
    this.User.category = preference;
    this.User.favEvents = null;
    this.User.notifications = null;
    this.User.admin = false;
    this.User.banned = false;

    
    if(username == " " || username.length<5 || username== null){
      this.router.navigate(['/Register']);
      console.log("username fail");
    }else if(email == null||!email.match("[^@]+@[^\\.]+\\..+")){
      this.router.navigate(['/Register']);
      console.log("email fail");
    }else if(password1 == null || password1.match("((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})")){
      // 1 uppercase letter
      // 1 lowercase letter
      // A number
      // A minimum length of 8
      
      this.router.navigate(['/Register']);
      console.log("password fail");
    }else if(password1 != password2){
      this.router.navigate(['/Register']);
      console.log("passwords don't match")
    }else if(password1 == password2){
      this.User.password = password1;
      this.dataService.register(this.User).then((res)=>{
        console.log("Creating user " + username + ": " + res);
      }).catch((e)=>{console.log(e)})
      console.log(this.User);
      this.router.navigate(['/']);
    }   
  }

  
  ngOnInit() {
    this.dataService.getAllCities();
    this.populateCities();
    this.populateCategories();
  }

  populateCities(){
    this.dataService.getAllCities().then((res) => {
      const data = res;
      this.cities = data;
    })
    .catch((e) => console.log(e));
  }

  populateCategories(){
    this.dataService.getAllCategories().then((res) => {
      const data = res;
      this.categories = data;
    })
    .catch((e) => console.log(e));
  }

}
