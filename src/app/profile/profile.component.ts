import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../Customer';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  
  addForm!: FormGroup;
  Submitted: boolean = false;
  customers!: any;
  customer: Customer = new Customer();
  id!: number;
  isDivVisible: boolean = false;
  editform: string = 'none';
  isDivVisible1: boolean = false;

  constructor(
    private service: ProfileService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    // Validations

    this.addForm = this.formBuilder.group({
      customerName: ['', Validators.required],
      customerPassword: ['', Validators.required],
      mobileNo: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      buildingNo: ['', Validators.required],
      streetName: ['', Validators.required],
      area: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    });

    this.reloadData();
  }

  // Customer Details

  reloadData() {
    this.id = parseInt(sessionStorage.getItem('id') as string);
    this.service.getCustomerById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.customer = data;
      },
      (error) => {
        console.log(error);
        alert("Can't load profile at moment");
      }
    );
  }

  // Edit Customer Details

  editdetail(id: number): void {
    this.isDivVisible = false;
    this.service.updateCustomer(this.customer).subscribe(
      (data) => {
        console.log(data);
        this.customer = data;
        this.reloadData();
      },
      (error) => {
        console.log(error);
        alert("Can't edit profile at moment");
      }
    );
  }
}
