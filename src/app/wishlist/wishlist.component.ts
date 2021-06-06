import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { WishList } from '../wishlist';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  allwish!: Observable<any>;
  wish: WishList = new WishList();
  id!: number;
  productId: string = '';
  userId: number = 0;
  product: Product = new Product();
  cart: Cart = new Cart();

  constructor(
    private servicewish: WishlistService,
    private service: ProductService,
    private servicecart: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  // Get All WishList Details

  reloadData() {
    this.id = sessionStorage.getItem('id') as unknown as number;
    this.servicewish.getWish(this.id).subscribe(
      (data) => {
        console.log(data);
        this.wish = data;
        console.log(this.wish);
      },
      (error) => {
        console.log(error);
        alert("Can't load wishlist at moment");
      }
    );
  }

  // Remove Wishlist By User Id & Product Id

  remove(productId: string, userId: number): void {
    this.servicewish.deleteWish(productId, userId).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
        console.log(this.wish);
      },
      (error) => {
        console.log(error);
        this.reloadData();
        alert("Can't remove this product");
      }
    );
  }

  // Get Details By Product Id

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
      }
    );
  }
}
