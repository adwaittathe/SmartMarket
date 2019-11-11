import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { AppUser } from 'src/models/AppUser';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {
  constructor(private aAuth: AuthService, private userService:UserService,private db:AngularFireDatabase) { 
  }

  canActivate():Observable<boolean>{
    /*
    return this.aAuth.user$.pipe(
      switchMap(user => this.userService.get(user.uid)),
      map((appUser : AppUser) => appUser.isAdmin)
    )
    */
    return this.aAuth.appUser$.pipe(map((appUser : AppUser) => appUser.isAdmin));
  }
}
