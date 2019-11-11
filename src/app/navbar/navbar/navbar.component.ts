import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { AppUser } from 'src/models/AppUser';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  appUser : AppUser;
  constructor( private service : AuthService) {
    service.appUser$.subscribe(appUser => this.appUser = appUser);     
  }

  Logout(){
     this.service.Logout()
  }

}
