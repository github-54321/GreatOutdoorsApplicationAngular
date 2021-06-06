import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productForm!: FormGroup;
  products!: Product[];
  product: Product = new Product();
  isDivVisible: boolean = false;
  isDivVisible1: boolean = false;
  Submitted!: boolean;

  constructor(
    private service: ProductService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    // Save All Product

    if (sessionStorage.getItem('adminid') != null) {
      this.service.getProductList().subscribe((mydata) => {
        this.products = mydata;
      });
    } else {
      this.router.navigate(['/mainhome']);
    }


    // Validations 

    this.productForm = this.formBuilder.group({
      productId: ['', Validators.required],
      productName: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
      color: ['', Validators.required],
      category: ['', Validators.required],
      quantity: ['', Validators.required],
      manufacturer: ['', Validators.required],
      specification: ['', Validators.required],
    });

    this.reloadData();
  }

  // All Product Details

  reloadData() {
    this.service.getProductList().subscribe(
      (data) => {
        console.log(data);
        this.products = data;
        console.log(this.products);
      },
      (error) => {
        console.log(error);
        alert("Can't find products at moment");
      }
    );
  }

  // Edit Product Details

  edit(): void {
    this.isDivVisible1 = false;
    this.isDivVisible = false;
    this.service.editProduct(this.product).subscribe(
      (data) => {
        console.log(data);
        this.product = data;
        this.reloadData();
      },
      (error) => {
        console.log(error);
        alert('product not found');
      }
    );
  }

  // Edit Product By Id

  editprod(productId: string): void {
    this.isDivVisible = true;
    this.isDivVisible1 = true;
    this.service.getProductById(productId).subscribe(
      (data) => {
        console.log(data);
        this.product = data;
        this.reloadData();
      },
      (error) => {
        console.log(error);
        alert("Can't edit product at moment");
      }
    );
  }

  // Delete Product By Id 

  remove(productId: string): void {
    this.service.removeProductById(productId).subscribe(
      (data) => {
        console.log(data);
        this.products = data;
        console.log(this.products);
      },
      (error) => {
        console.log(error);
        alert("Product is in carts, Can't delete");
      }
    );
  }

  // Product Details

  detail(productId: string): void {
    this.isDivVisible = true;
    this.service.getProductById(productId).subscribe(
      (data) => {
        console.log(data);
        this.product = data;
        this.reloadData();
      },
      (error) => {
        console.log(error);
        alert("Can't load details at moment");
      }
    );
  }
}
