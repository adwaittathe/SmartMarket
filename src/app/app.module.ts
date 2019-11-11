import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AppRoutingModule } from './app-routing.module';
import { MatPaginatorModule, MatInputModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomFormsModule } from 'ng2-validation';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoriesService } from './categories.service';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardDisplayComponent } from './products/product-card-display/product-card-display.component';
import { AgencyFormComponent } from './admin/agency-form/agency-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardDisplayComponent,
    AgencyFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatGridListModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CustomFormsModule,
  
    RouterModule.forRoot([
      { 
        path : '' , 
        component : HomeComponent 
      },
      { 
        path : 'products' , 
        component : ProductsComponent 
      },
      { 
        path : 'shopping-cart' , 
        component : ShoppingCartComponent 
      },
      { 
        path : 'check-out' , 
        component : CheckOutComponent , canActivate:[AuthGuardService]
      },
      { 
        path : 'order-success' , 
        component : OrderSuccessComponent , canActivate:[AuthGuardService]
      },
      { 
        path : 'login' , 
        component : LoginComponent 
      },    
      { 
        path : 'admin/products/:id' , 
        component : ProductFormComponent , canActivate:[AuthGuardService, AdminAuthGuardService]
      },
      { 
        path : 'admin/products' , 
        component : AdminProductsComponent , canActivate:[AuthGuardService, AdminAuthGuardService]
      },
      { 
        path : 'admin/new-product' , 
        component : ProductFormComponent , canActivate:[AuthGuardService, AdminAuthGuardService]
      },
      { 
        path : 'admin/new-agency' , 
        component : AgencyFormComponent , canActivate:[AuthGuardService, AdminAuthGuardService]
      },
      { 
        path : 'admin/orders' , 
        component : AdminOrdersComponent , canActivate:[AuthGuardService ,  AdminAuthGuardService]  
      },
      { 
        path : 'my/orders' , 
        component : MyOrdersComponent, canActivate:[AuthGuardService]
      }

    ]),
    NgbModule.forRoot()

  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    ProductService,
    AdminAuthGuardService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
