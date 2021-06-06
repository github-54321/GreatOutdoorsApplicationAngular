import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { Salesreport } from '../Salesreport';
import { SalesreportService } from '../salesreport.service';

@Component({
  selector: 'app-salesreport',
  templateUrl: './salesreport.component.html',
  styleUrls: ['./salesreport.component.css'],
})
export class SalesreportComponent implements OnInit {
  sales!: Salesreport[];
  sale: Salesreport = new Salesreport();
  searchValue: string = '';
  salesById: any = '';
  product: Product = new Product();
  products!: Product[];
  productId: string = '';

  constructor(private salesservice: SalesreportService) { }

  ngOnInit(): void {

    // Get All Sales Report

    this.salesservice.getSalesReports().subscribe((mydata) => {
      this.sales = mydata;
    });
  }

  //Search Product By Id

  searchByProductId(): void {
    if (this.productId === null || this.productId === '') {
      this.salesservice.getSalesReports().subscribe((mydata) => {
        this.sales = mydata;
      });
    } else {
      this.salesservice.getSalesReportsById(this.productId).subscribe(
        (mydata) => {
          this.sale = mydata; //obj
          this.sales = []; //make empty
          this.sales.push(this.sale); //add sale obj to array
          console.log(this.sale);
        },
        (error) => {
          console.log(error);
          alert("Can't find reports at moment");
        }
      );
    }
  }
}
