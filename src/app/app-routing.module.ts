import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminhomeComponent } from './adminhome/adminhome.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { CustomerComponent } from './customer/customer.component';
import { GrowthreportComponent } from './growthreport/growthreport.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { LogoutuserComponent } from './logoutuser/logoutuser.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { OrderComponent } from './order/order.component';
import { Product } from './Product';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisternameComponent } from './registername/registername.component';
import { SalesreportComponent } from './salesreport/salesreport.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { UsercartComponent } from './usercart/usercart.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: 'customer', component: CustomerComponent },
  { path: 'addcustomer', component: RegisternameComponent },
  { path: 'logincust', component: LoginuserComponent },
  { path: 'logoutcust', component: LogoutuserComponent },
  { path: 'userhome', component: UserhomeComponent },
  { path: 'mainhome', component: MainhomeComponent },
  { path: 'adminhome', component: AdminhomeComponent },
  { path: 'loginadmin', component: LoginadminComponent },
  { path: 'create', component: CreateproductComponent },
  { path: 'viewProduct', component: ProductComponent },
  { path: 'searchproduct', component: SearchproductComponent },
  { path: 'details', component: ProductdetailsComponent },
  { path: 'cart', component: UsercartComponent },
  { path: 'order', component: OrderComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'salesreport', component: SalesreportComponent },
  { path: 'growthreport', component: GrowthreportComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
