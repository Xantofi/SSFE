import { Component } from '@angular/core';
import { ProductService } from './Services/Product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts();
  }
}
