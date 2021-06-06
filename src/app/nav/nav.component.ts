import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isLoggedAdmin: boolean = false;
  isLoggedCustomer: boolean = false;

  constructor(private service: CustomerService) { }

  ngOnInit(): void {
    this.isLoggedAdmin = this.service.isLoggedAdmin();
    console.log('value: ' + this.isLoggedAdmin);
    this.isLoggedCustomer = this.service.isLoggedCustomer();
    console.log('value: ' + this.isLoggedCustomer);
  }
}
