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
    return this.products;
  }

  checkForStorage() {
    const cartHasContent = this.products.length;
    if (!cartHasContent) {
      if (sessionStorage['cart']) {
        this.products = JSON.parse(sessionStorage['cart']);
      } else {
        this.products = [];
      }
    }
  }

  removeFromCart(product: Producto) {
    this.products.splice(this.products.indexOf(product), 1);
    this.updateCart(this.products);
  }

  removeAllInstances(product: Producto) {
    this.products = this.products.filter(
      (currentProduct) => product.product !== currentProduct.product
    );
    this.updateCart(this.products);
  }

  clearCart() {
    this.products = [];
    this.updateCart(this.products);
    return this.products;
  }

  isProductInCart(product: Producto) {
    this.products = this.getProducts();
    return this.products.some((prod) => prod.product === product.product);
  }

  private updateCart(products: Producto[]) {
    sessionStorage['cart'] = JSON.stringify(products);
  }
}
