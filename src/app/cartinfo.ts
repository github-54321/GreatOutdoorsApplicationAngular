import { Product } from './Product';

export class CartInfo {
  cartTotalPrice: number = 0;
  totalQuantity: number = 0;
  productList: Product[] = [];
}
