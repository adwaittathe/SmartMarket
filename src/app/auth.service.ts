import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from 'src/models/AppUser';
import { UserService } from './user.service';
import { map, switchMap } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import { AngularFireDatabase } from 'angularfire2/database';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ : Observable<firebase.User>;
  
  constructor(private db:AngularFireDatabase,private userService:UserService, private aAuth : AngularFireAuth, private route:ActivatedRoute) 
  { 
    this.user$= aAuth.authState;
    
  }

  Login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl);  
    this.aAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  Logout(){
    console.log("logout");
    this.aAuth.auth.signOut()
  }

  get appUser$() : Observable<any> {
    return this.user$.pipe(switchMap(u=>{
      if(u)  return this.userService.get(u.uid);

      return Observable.of(null);
     
    }))
  }

 
}
