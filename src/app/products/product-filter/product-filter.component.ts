import { Component, OnInit, Input } from '@angular/core';
import { CategoriesService } from 'src/app/categories.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent  {

  categoryList$;
  @Input('category') category
  @Input('categoryFlag') categoryFlag
  constructor(categoryService : CategoriesService) { 
    this.categoryList$ = categoryService.getCategories();
  }
}
