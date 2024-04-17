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
      this.products = JSON.parse(sessionStorage['cart']) ?? [];
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

  searchProductInCart(product: Producto) {
    return this.products.some((item) => item.product === product.product);
    /* this.cartProducts.some(
      (item) => item.product.id === this.selectedProduct?.id
    ); */
  }

  private updateCart(products: Producto[]) {
    sessionStorage['cart'] = JSON.stringify(products);
  }
}
