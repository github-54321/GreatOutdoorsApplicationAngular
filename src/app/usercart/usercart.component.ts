import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { CartInfo } from '../cartinfo';
import { Order } from '../Order';
import { OrderService } from '../order.service';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css'],
})
export class UsercartComponent implements OnInit {
  allcart!: Observable<any>;
  cart: Cart = new Cart();
  id!: number;
  productId: string = '';
  cartInfo: CartInfo = new CartInfo();
  order: Order = new Order();
  userId: number = 0;
  product: Product = new Product();

  constructor(
    private servicecart: CartService,
    private serviceorder: OrderService,
    private service: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  // Get All Items of Users Cart

  reloadData() {
    this.id = sessionStorage.getItem('id') as unknown as number;
    this.servicecart.getCartByUserId(this.id).subscribe(
      (data) => {
        console.log(data);
        this.cartInfo = data;
        console.log(this.cartInfo);
      },
      (error) => {
        console.log(error);
        alert("Can't load cart at moment");
      }
    );
  }

  // Delete Cart By Product Id

  remove(productId: string): void {
    this.id = sessionStorage.getItem('id') as unknown as number;
    this.servicecart.deleteCartByProductId(this.id, productId).subscribe(
      (data) => {
        console.log(data);
        this.cartInfo = data;
        console.log(this.cartInfo);
      },
      (error) => {
        console.log(error);
        alert("Can't remove this product from cart at moment");
      }
    );
  }

  // Add Order From Cart 

  addOrderFromCart(): void {
    this.userId = sessionStorage.getItem('id') as unknown as number;
    this.serviceorder.makeOrderFromCart(this.userId).subscribe(
      (data) => {
        console.log(data);
        this.order = data;
        this.reloadData();
        console.log(this.order);
        alert('Order placed');
      },
      (error) => {
        console.log(error);
        alert('Cant place order at moment');
      }
    );
  }

  // Get Product Details By Id

  getDetails(productId: string): void {
    this.service.getProductById(productId).subscribe(
      (data) => {
        console.log(data);
        this.product = data;
        sessionStorage.setItem('productId', this.product.productId + '');
        this.router.navigate(['details']);
      },
      (error) => {
        console.log(error);
        alert("Can't load product at moment");
      }
    );
  }
}
