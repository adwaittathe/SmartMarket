import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { UUID } from 'angular2-uuid';
import { LoginComponent } from './login/login.component';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  Airlines = "https://8fidr25j42.execute-api.us-east-1.amazonaws.com/DEV/airlines";
  Airline = "https://8fidr25j42.execute-api.us-east-1.amazonaws.com/DEV/airline";
  postUrl = "https://ppjznqidic.execute-api.us-east-1.amazonaws.com/Dev/spot";
  deleteAirline = "https://8fidr25j42.execute-api.us-east-1.amazonaws.com/DEV/airline/delete";
  agencyURL = "https://iihj721n84.execute-api.us-east-1.amazonaws.com/Development/agency";
  agencies_URL = "https://iihj721n84.execute-api.us-east-1.amazonaws.com/Development/agencies";

  uuid = UUID.UUID();
  constructor(private db:AngularFireDatabase,
    private http : HttpClient) 
  {
  } 

  addAgency(agency)
  {

      this.http.post(this.agencyURL, JSON.stringify(agency)).subscribe(s=>{
      }); 
   
    
  }
  getAgencies()
  {
    return this.http.get(this.agencies_URL);
  }

  getAgencybyId(agencyId)
  {
    return this.http.post(this.agencyURL, JSON.stringify(agencyId));
  }
  create(product){ 

      this.http.post(this.Airlines, JSON.stringify(product)).subscribe(s=>{
      }); 
      
  }

  update(productId, product)
  {
    product.id = productId.trim();
    console.log("UPDATE PROd");
    console.log(JSON.stringify(product));
    
    
    this.http.put(this.Airline, JSON.stringify(product)).subscribe(s=>{
    });   
  }
  
  delete(airlineId)
  {
    console.log("DELETE PRODUCT " + JSON.stringify(airlineId));
    
    this.http.post(this.deleteAirline , JSON.stringify(airlineId)).subscribe(s=>{

    }); 
  }
  getAll(){
    //return this.http.get(this.saveUrl)
    //return this.db.list('/products').snapshotChanges();
  }
  getAllAirlines(){
    return this.http.get(this.Airlines);
    //return this.db.list('/products').snapshotChanges();
  }

   getAirline(airlineId)
  {
    return this.http.post(this.Airline , airlineId);
  }

  getProduct(productId)
  {
    return this.http.post(this.postUrl , productId);
    //return this.db.object('/products/'+ productId);
  }


}
