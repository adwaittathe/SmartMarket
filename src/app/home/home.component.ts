import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isGood=true;

  change(){
    this.isGood=!this.isGood;
  }
  /*
  user
  url = "https://dmfa5nmkj3.execute-api.us-east-1.amazonaws.com/Dev/user";
  constructor(http : HttpClient) { 
    this.user = {
      "id" : "sd1",
      "firstName" : "James",
      "lastName" : "assa"
    }
    http.post(this.url, JSON.stringify(this.user))
        .subscribe(res =>{
          console.log(res);
        })
  }
  */
}
