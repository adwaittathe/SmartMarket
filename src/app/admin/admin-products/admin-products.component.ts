import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef, QueryList, ViewChildren } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Product } from 'src/models/Product';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
 
  @ViewChild('travelPaginator',{static:true}) pag : MatPaginator;
  @ViewChild('airlinePaginator',{static:true}) air : MatPaginator; 

  displayedAirlineColumns : string[] = ['CARR_CODE' , 'CARR_NAME','CITY','action']; 
  agencyColumn : string[] = ['AGENCY_NBR' , 'BUSINESS_NAME' ,'CITY','action'];
  productlist : any[];
  filteredProductList : any[];
  airline_subscription : Subscription;
  travel_subscription : Subscription;

  airlinesData;
  travelData;
  //dataSource; 


  constructor( private productService : ProductService, private cdr: ChangeDetectorRef) 
  { 
    this.airline_subscription= this.productService.getAllAirlines().subscribe(
      (x:any[])=>
      {
      this.airlinesData = new MatTableDataSource(x); 
      //this.airlinesData.sort = this.airlineSort;
      this.airlinesData.paginator = this.air;
      })
    
    this.travel_subscription = this.productService.getAgencies().subscribe(
      (travel : any[]) =>
      {
        this.travelData = new MatTableDataSource(travel);
       // this.travelData.sort = this.travelSort;
        this.travelData.paginator = this.pag;
      }
    )
 
  }

  travelFilter(filterValue: string) {
    this.travelData.filter = filterValue.trim().toLowerCase();
  }

  airlinesFilter(filterValue: string) {
    this.airlinesData.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {

  }
  ngAfterViewInit() {
    
  }
  ngOnDestroy() {   
     this.airline_subscription.unsubscribe();
     this.travel_subscription.unsubscribe();
  }
 
}
