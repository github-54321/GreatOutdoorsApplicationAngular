import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css'],
})
export class LoginuserComponent implements OnInit {
  customer: Customer = new Customer();
  loginForm!: FormGroup;
  Submitted: boolean = false;

  constructor(
    private service: CustomerService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      userPassword: ['', Validators.required],
    });
  }

  login() {
    this.Submitted = true;
    if (this.loginForm.invalid) {
      alert('Invalid inputs');
      console.log(this.loginForm);
      return;
    } else {
      this.service
        .login(this.customer.email, this.customer.customerPassword)
        .subscribe(
          (data) => {
            console.log(data);
            this.customer = data;

            sessionStorage.setItem('userid', this.customer.email + '');
            sessionStorage.setItem('id', this.customer.customerId + '');

            sessionStorage.setItem('password', this.customer.customerPassword);

            sessionStorage.setItem('name', this.customer.customerName);

            sessionStorage.setItem('area', this.customer.address.area);

            this.router.navigate(['searchproduct']);
          },
          (error) => {
            console.log(error);
            alert('Invalid Credentials');
          }
        );
    }
  }
}
