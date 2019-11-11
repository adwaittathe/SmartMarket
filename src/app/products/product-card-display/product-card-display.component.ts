import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-display',
  templateUrl: './product-card-display.component.html',
  styleUrls: ['./product-card-display.component.css']
})
export class ProductCardDisplayComponent  {

  @Input('prod') prod
  @Input('show-actions') showactions = true

  constructor() { }
}
