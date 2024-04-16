import { Injectable } from '@angular/core';
import { Producto } from '../../Interfaces/iProduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  private products: Producto[] = [];

  addToCart(product: Producto) {
    this.products.push(product);
    this.updateCart(this.products);
  }

  getProducts() {
    const cartHasContent = this.products.length;
    if (!cartHasContent) {
      this.products = JSON.parse(sessionStorage['cart']) ?? [];
    }
    return this.products;
  }

  removeFromCart(product: Producto) {
    this.products.splice(this.products.indexOf(product), 1);
    this.updateCart(this.products);
  }

  clearCart() {
    this.products = [];
    this.updateCart(this.products);
    return this.products;
  }

  private updateCart(products: Producto[]) {
    sessionStorage['cart'] = JSON.stringify(products);
  }
}
