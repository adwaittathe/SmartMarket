import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriesService } from 'src/app/categories.service';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/operator/take';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent   {


  categories$;
  prod : any = {}; 

  id;
  airlineId;
  //alternateUrl = "https://img.freepik.com/free-photo/airplane-parking-with-sunset_37328-3.jpg?size=626&ext=jpg";
  

  constructor(
     private router : Router,
     private route : ActivatedRoute,
     private categoryService : CategoriesService ,
     private prodservice: ProductService) 
     {
     this.categories$ = categoryService.getCategories();
     this.id = route.snapshot.paramMap.get('id');
     //this.prod.imageUrl = this.alternateUrl.trim();
     this.airlineId = {
       "id" : this.id
     }
     if(this.id)
     {
       this.prodservice.getAirline(this.airlineId).pipe(take(1)).subscribe(prod =>{
       this.prod = prod;
       if(!this.prod.imageUrl)
       {
        //this.prod.imageUrl = this.alternateUrl.trim();
       }
       
     })
     }

  }

  delete()
  {
    if(confirm("Do you want to delete?"))
    {
      this.prodservice.delete(this.airlineId);
      this.router.navigate(['/admin/products']);

    }

  }

  save(product) {
     if(this.id)
     {
       this.prodservice.update(this.id,product);
     }
     else{ 
     this.prodservice.create(product);
     }
     this.router.navigate(['/admin/products']);
  }


}
