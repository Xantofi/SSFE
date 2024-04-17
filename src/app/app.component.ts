import { Component } from '@angular/core';
import { ProductService } from './Services/Product/product.service';
import { CartService } from './Services/Cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.cartService.checkForStorage();
    this.productService.getProducts();
  }
}
