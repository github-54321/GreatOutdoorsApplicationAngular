import { Product } from './Product';

export class OrderInfo {
  orderId!:number;
  totalPrice: number = 0;
  totalQuantity: number = 0;
  productList: Product[] = [];
  dispatchDate!:Date;
  deliveryDate!:Date;
}