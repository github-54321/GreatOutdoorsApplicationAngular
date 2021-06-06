import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css'],
})
export class UserhomeComponent implements OnInit {
  customerId: string = '';
  customerName: string = '';
  customer: Customer = new Customer();
  customerArea: string = '';

  constructor(private service: CustomerService, private route: Router) { }

  ngOnInit(): void {

    // Display

    if (sessionStorage.getItem('userid') != null) {
      this.customerId = sessionStorage.getItem('userid') as string;
      this.customerName = sessionStorage.getItem('name') as string;
      this.customerArea = sessionStorage.getItem('area') as string;

      this.service.getUserById(this.customerId).subscribe(
        (data) => {
          console.log(data);
          this.customer = data;
        },
        (error) => {
          console.log(error);
          alert("Can't load homepage");
        }
      );
    } else {
      this.route.navigate(['/logincust']);
    }
  }
}
