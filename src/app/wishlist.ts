import { Customer } from "./Customer";
import { Product } from "./Product";

export class WishList {

  wishlistId: number = 0;
  customer: Customer = new Customer;
  productIds: Product[] = [];
}