import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList :any = [];
  filteredProductList : any= [];
  
  
  category : string
  categoryFlag=true;
  constructor(
    private route : ActivatedRoute,
    private productService: ProductService 
    ) {

 /*
  this.route.queryParamMap.subscribe(param=>{
    this.category = param.get('category');
    if(this.category === 'travel')
    {
      this.filteredProductList=[];
    }
    else
    {
      this.categoryFlag = false;
      this.productService.getAllAirlines().subscribe(s=>{
        this.filteredProductList=s;
      });
    }
  });
  */

  this.route.queryParamMap.switchMap((param)=>{
    this.category = param.get('category');
    console.log("CAT +++");
    console.log(this.category);
       
    if(this.category == 'airline')
    {
      this.categoryFlag = false;
      return this.productService.getAllAirlines(); 
    }
    else
    {
      this.categoryFlag = true;
      return this.productService.getAgencies();
      
    }
  }).subscribe(s=>{
    this.filteredProductList=s;
  });
  
  
  
   /*  
  this.productService.getAll().switchMap((prod: any[]) =>{
    this.productList=prod;
    return this.route.queryParamMap;
  }).subscribe(param =>{
    this.category = param.get('category');
      this.filteredProductList = (this.category)
       ? this.productList.filter( p => p.category === this.category)
       : this.productList;
  })
  */
  
  /*
  this.productService.getAll().map(changes =>
    {
      return changes.map( c => ({
        key:c.payload.key, ...c.payload.val()
      }))
    })
    .switchMap(prod =>{
      this.productList=prod;
      return this.route.queryParamMap;
    })
    .subscribe(param=>{
      this.category = param.get('category');
      this.filteredProductList = (this.category)
       ? this.productList.filter( p => p.category === this.category)
       : this.productList;
    })
  */ 
  }
  

  ngOnInit() {

  
  }

}
