import { Component } from '@angular/core';
import { Producto } from 'src/app/Interfaces/iProduct';
import { CartService } from 'src/app/Services/Cart/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent {
  constructor(private cartService: CartService) {}

  cartProducts: Producto[] = [];

  ngOnInit() {
    this.updateList();
  }

  clearCart() {
    this.cartService.clearCart();
    this.updateList();
  }

  removeFromCart(product: Producto) {
    this.cartService.removeFromCart(product);
    this.updateList();
  }

  private updateList() {
    this.cartProducts = this.cartService.getProducts();
  }
}
