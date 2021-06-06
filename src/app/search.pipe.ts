import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './Product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[], searchValue: string): Product[] {
    if (!products || !searchValue) {
      return products;

    }
    return products.filter(product =>
      product.productName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      product.manufacturer.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      product.specification.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())


    );
  }

}
