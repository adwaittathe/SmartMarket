import { Injectable, Query } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  url = "https://3h8f87i2rd.execute-api.us-east-1.amazonaws.com/Dev/country";
  constructor(private db: AngularFireDatabase,
    private http : HttpClient
    ) 
   {
     
   }

  getCategories() {

    return this.http.get(this.url)
    /*
    return this.db.list('/categories', ref => ref.orderByChild('name')).snapshotChanges()
    .pipe(
        map(actions => actions.map(a => ({ key: a.key, ...a.payload.val() }))
      )
    );
    */

  
  }
}
