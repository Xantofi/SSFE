import { Injectable } from '@angular/core';
import { Producto } from '../../Interfaces/iProduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  products: Producto[] = [];

  addToCart(product: Producto) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  clearCart() {
    this.products = [];
    return this.products;
  }
}
