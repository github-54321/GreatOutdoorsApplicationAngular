import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { OrderInfo } from '../OrderInfo';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  id: number = 0;
  orderInfo: OrderInfo = new OrderInfo();
  ordersList: OrderInfo[] = [];

  constructor(private serviceorder: OrderService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  // Get All Users Order List

  reloadData() {
    this.id = sessionStorage.getItem('id') as unknown as number;
    this.serviceorder.getOrdersByUserId(this.id).subscribe(
      (data) => {
        console.log(data);
        this.ordersList = data;
        console.log(this.ordersList);
      },
      (error) => {
        console.log(error);
        alert("Can't find orders at moment");
      }
    );
  }


  //Delete Order By Product Id

  removeOrder(productId: string): void {
    this.id = sessionStorage.getItem('id') as unknown as number;
    this.serviceorder.deleteOrderByProductId(this.id, productId).subscribe(
      (data) => {
        console.log(data);
        this.orderInfo = data;
        this.reloadData();
        console.log(this.orderInfo);
      },
      (error) => {
        console.log(error);
        alert('Product is delivered');
      }
    );
  }

   //Delete Order By Order Id

  removeOrderByOrderId(orderId: number): void {
    this.serviceorder.deleteOrderByorderId(orderId).subscribe(
      (data) => {
        console.log(data);
        this.orderInfo = data;
        this.reloadData();
        console.log(this.orderInfo);
      },
      (error) => {
        console.log(error);
        alert('Order is delivered');
      }
    );
  }
}
