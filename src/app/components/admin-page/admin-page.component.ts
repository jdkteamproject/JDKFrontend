import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DataService } from 'src/app/services/data.service';
import { User } from '../../model/users/users.model';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private dataService: DataService, private authService: AuthenticationService) { }

  currentUserId: number;
  message: string;

  currentUser: User = {
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

  ngOnInit() {
    this.currentUserId = +window.localStorage.getItem('userId');
    this.dataService.getUserById(this.currentUserId).then((res)=>{
      this.currentUser = res;
      console.log(this.currentUser);
      this.getUser();
    }).catch((e)=>console.log(e))
  }

  users: User[] = [];

  getUser(){
    this.dataService.getAllUsers().then((res)=>{
     this.users=res; 
    })
    .catch((e)=>console.log(e));
  }

  deleteUser(u_id: number){
   console.log("here")
   this.dataService.getUserById(u_id).then((res) =>{
    this.message = res.username + " has been deleted.";
   }).catch((e)=>{console.log(e)})

   this.dataService.delete(u_id).then((res)=>{
    console.log(res);

    this.getUser();
    })

   .catch((e)=>console.log(e)); 
    
  }

  logout(){
    this.authService.logoutUser();
  }

  toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
