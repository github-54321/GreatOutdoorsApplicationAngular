import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css'],
})
export class SearchproductComponent implements OnInit {
  products!: Product[];
  product: Product = new Product();
  searchValue: string = '';
  type1: string = '';

  // Category Of Products

  category = [
    'Food',
    'Clothing',
    'Home and living',
    'Beauty',
    'Electronics',
    'Footwear',
    'Accessories',
  ];

  // Maxprice Array

  maxprice = [100, 500, 1000, 2000, 5000];

  type2!: number;

  constructor(private service: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.service.getProductList().subscribe((mydata) => {
      this.products = mydata;
    });
  }

  // Search Products By Category

  searchbycategory(): void {
    this.service
      .getProductByCategory(this.product.category)
      .subscribe((mydata) => {
        this.products = mydata;
      });
  }

  // Get Product Details 

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
        alert("Can't load details at moment");
      }
    );
  }

  // Products By Category

  getProducts() {
    this.service.getProductByCategory(this.type1).subscribe(
      (data) => {
        console.log('product is added to cart');
        this.products = data;
      },
      (error) => {
        console.log(error);
        alert("Can't load products at moment");
      }
    );
  }

  // Filter Products By Price

  filterProductsByPrice() {
    this.service.filterByPrice(this.type2).subscribe(
      (data) => {
        console.log('product is added to cart');
        this.products = data;
      },
      (error) => {
        console.log(error);
        alert("Can't load products");
      }
    );
  }
}
