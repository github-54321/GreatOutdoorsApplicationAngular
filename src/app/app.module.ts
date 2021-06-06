import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SearchPipe } from './search.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './customer.service';

import { RegisternameComponent } from './registername/registername.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { LogoutuserComponent } from './logoutuser/logoutuser.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { ProductComponent } from './product/product.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { NavComponent } from './nav/nav.component';
import { UsercartComponent } from './usercart/usercart.component';
import { OrderComponent } from './order/order.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SalesreportComponent } from './salesreport/salesreport.component';
import { GrowthreportComponent } from './growthreport/growthreport.component';
import { NavadminComponent } from './navadmin/navadmin.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    RegisternameComponent,
    LoginuserComponent,
    LogoutuserComponent,
    UserhomeComponent,
    MainhomeComponent,
    LoginadminComponent,
    AdminhomeComponent,
    CreateproductComponent,
    ProductComponent,
    SearchproductComponent,
    SearchPipe,
    ProductdetailsComponent,
    NavComponent,
    UsercartComponent,
    OrderComponent,
    WishlistComponent,
    SalesreportComponent,
    GrowthreportComponent,
    NavadminComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [CustomerService, FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule { }
