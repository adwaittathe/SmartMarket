import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardDisplayComponent } from './product-card-display.component';

describe('ProductCardDisplayComponent', () => {
  let component: ProductCardDisplayComponent;
  let fixture: ComponentFixture<ProductCardDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCardDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
