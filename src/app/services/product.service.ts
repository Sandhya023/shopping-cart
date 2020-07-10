import { Injectable } from '@angular/core';
import {Product} from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    new Product(0, 'Product 0', 'This is the product 0 description. The product is really cool', 1250),
    new Product(1, 'Product 1', 'This is the product 1 description. The product is really cool', 100),
    new Product(2, 'Product 2', 'This is the product 2 description. The product is really cool', 150),
    new Product(3, 'Product 3', 'This is the product 3 description. The product is really cool', 50),
    new Product(4, 'Product 4', 'This is the product 4 description. The product is really cool', 200),
    new Product(5, 'Product 5', 'This is the product 5 description. The product is really cool', 100),
    new Product(6, 'Product 6', 'This is the product 6 description. The product is really cool', 250),
]

  constructor() { }

  getProducts(): Product[] {
    return this.products
  }
}
