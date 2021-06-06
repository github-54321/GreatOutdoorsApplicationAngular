import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.component.html',
  styleUrls: ['./mainhome.component.css'],
})
export class MainhomeComponent implements OnInit {
  isLoggedAdmin: boolean = false;
  isLoggedCustomer: boolean = false;

  constructor(private service: CustomerService) {}

  //Login Admin & Customer
  
  ngOnInit(): void {
    this.isLoggedAdmin = this.service.isLoggedAdmin();
    console.log('value: ' + this.isLoggedAdmin);
    this.isLoggedCustomer = this.service.isLoggedCustomer();
    console.log('value: ' + this.isLoggedCustomer);
  }
}
