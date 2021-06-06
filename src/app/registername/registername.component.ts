import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-registername',
  templateUrl: './registername.component.html',
  styleUrls: ['./registername.component.css'],
})
export class RegisternameComponent implements OnInit {
  addForm!: FormGroup;
  customer: Customer = new Customer();
  customers!: Customer[];

  categ = ['Sales Representative', 'Retailer'];
  Submitted: boolean = false;

  constructor(
    private service: CustomerService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    // Validations 

    this.addForm = this.formBuilder.group({
      customerName: ['', Validators.required],
      customerPassword: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~])[a-zA-Z0-9!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]{8,10}$/
          ),
        ]),
      ],
      mobileNo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern(/^[7-9][0-9]{9}$/),
        ]),
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z]+\\.[a-z]{2,4}$'),
        ],
      ],
      role: ['', Validators.required],
      buildingNo: ['', Validators.required],
      streetName: ['', Validators.required],
      area: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    });
  }

  // Add New Customer

  savecustomer() {
    this.Submitted = true;
    if (this.addForm.invalid) {
      alert('Registration is not Valid');
      console.log(this.addForm);
      return;
    } else {
      this.service.addCustomer(this.customer).subscribe(
        (data) => {
          console.log(data);
          this.customer = data;
          alert('Login to continue');
          this.router.navigate(['logincust']);
        },
        (error) => {
          console.log(error);
          alert('Email already exists');
        }
      );
    }
  }
}
