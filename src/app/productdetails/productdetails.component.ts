import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Order } from '../Order';
import { OrderService } from '../order.service';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { WishList } from '../wishlist';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  cart: Cart = new Cart();
  order: Order = new Order();
  wish: WishList = new WishList();

  products!: Product[];
  productId: string = '';
  userId: number = 0;
  product: Product = new Product();

  quantity: number = 1;
  pquantity: number = 1;

  constructor(
    private service: ProductService,
    private servicecart: CartService,
    private serviceorder: OrderService,
    private servicewish: WishlistService,
    private route: Router
  ) { }

  ngOnInit(): void {

    // Display Product Information 

    if (
      sessionStorage.getItem('userid') != null ||
      sessionStorage.getItem('adminid')
    ) {
      if (sessionStorage.getItem('productId') != null) {
        this.productId = sessionStorage.getItem('productId') as string;
        this.service.getProductById(this.productId).subscribe((mydata) => {
          this.product = mydata;
        });
      }
    } else {
      this.route.navigate(['/logincust']);
    }
  }

  // Add Products to Cart

  addtocart(): void {
    this.userId = sessionStorage.getItem('id') as unknown as number;
    this.cart.cutomerId = this.userId;
    this.cart.productId = sessionStorage.getItem('productId') as string;
    this.cart.productQuantity = this.pquantity;
    console.log(this.cart.productQuantity);
    console.log(this.cart.productId);
    console.log(this.cart.cutomerId);
    this.servicecart.addCart(this.cart).subscribe(
      (data) => {
        console.log(data);
        this.cart = data;
        this.route.navigate(['cart']);
      },
      (error) => {
        console.log(error);
        alert("Can't add this product to cart at moment");
      }
    );
  }

  // Ordering a Product

  addorder(): void {
    this.userId = sessionStorage.getItem('id') as unknown as number;
    this.order.customerId = this.userId;
    this.order.productId = sessionStorage.getItem('productId') as string;
    this.order.productQuantity = this.pquantity;
    console.log(this.order.productQuantity);
    console.log(this.order.productId);
    console.log(this.order.customerId);
    this.serviceorder.addOrder(this.order).subscribe(
      (data) => {
        console.log(data);
        this.order = data;
        console.log(this.order);
        this.route.navigate(['order']);
      },
      (error) => {
        console.log(error);
        alert("Can't order at moment");
      }
    );
  }

  // Add Product To WishList

  addtowishlist(): void {
    this.userId = sessionStorage.getItem('id') as unknown as number;
    this.product.productId = sessionStorage.getItem('productId') as string;
    console.log(this.product.productId);
    this.servicewish.addWish(this.userId, this.product.productId).subscribe(
      (data: any) => {
        console.log(data);
        this.wish = data;
        this.route.navigate(['wishlist']);
      },
      (error) => {
        console.log(error);
        alert("Can't add to wishlist at moment");
      }
    );
  }

  // Quantity selection

  i = 1;
  plus() {
    this.i++;
    this.pquantity = this.i;
  }

  minus() {
    if (this.i != 1) {
      this.i--;
      this.pquantity = this.i;
    }
  }
}
