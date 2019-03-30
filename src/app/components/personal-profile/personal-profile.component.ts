import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.css']
})
export class PersonalProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // declare var modal: string = document.getElementById('profileModal');
  // var btn = document.getElementById("seeProfile");
  // var span = document.getElementsByClassName("close")[0];
  // btn.onclick = function() {
  //   modal.style.display = "block";
  // }
  // span.onclick = function() {
  //   modal.style.display = "none";
  // }
  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }
}
