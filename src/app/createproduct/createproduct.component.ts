import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css'],
})
export class CreateproductComponent implements OnInit {
  productForm!: FormGroup;
  products!: Observable<Product[]>;
  product: Product = new Product();

  // Category Array

  category = [
    'Food',
    'Clothing',
    'Home and living',
    'Beauty',
    'Electronics',
    'Footwear',
    'Accessories',
  ];

  Submitted!: boolean;

  constructor(
    private service: ProductService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    //Validations

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

    if (sessionStorage.getItem('adminid') != null) {
      this.service.getProductList().subscribe((mydata) => {
        this.products = mydata;
      });
    } else {
      this.router.navigate(['/mainhome']);
    }
  }

  // Adding Products

  saveproduct() {
    this.Submitted = true;
    if (this.productForm.invalid) {
      alert('Invalid inputs');
      console.log(this.productForm);
      return;
    } else {
      this.service.createProduct(this.product).subscribe(
        (data) => {
          console.log(data);
          alert('Product is added');
        },
        (error) => {
          console.log(error);
          alert('Invalid inputs');
        }
      );
    }
  }
}
