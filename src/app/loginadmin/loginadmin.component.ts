import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from '../customer.service';
import { User } from '../User';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css'],
})
export class LoginadminComponent implements OnInit {
  user: User = new User();
  products!: Observable<User[]>;
  loginForm!: FormGroup;
  Submitted: boolean = false;
  resp: Observable<any> | undefined;

  constructor(
    private service: CustomerService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    // Validations

    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required],
      userPassword: ['', Validators.required],
    });
  }

  // Login Method

  login() {
    this.Submitted = true;
    if (this.loginForm.invalid) {
      alert('Invalid input');
      console.log(this.loginForm);
      return;
    } else {
      this.service
        .loginAdmin(this.user.userId, this.user.userPassword)
        .subscribe(
          (data) => {
            console.log(data);
            this.user = data;
            sessionStorage.setItem('adminid', this.user.userId + '');
            sessionStorage.setItem('adminname', this.user.userName);
            this.router.navigate(['/salesreport']);
          },
          (error) => {
            console.log(error);
            alert('Wrong Username or password');
          }
        );
    }
  }
}
