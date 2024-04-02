import { Component } from '@angular/core';
import { datosJson } from './products';
import { type Producto } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mperez_takeup';
  jsonData = [...datosJson];
  productList: Producto[] = this.jsonData;
  originalList: Producto[] = this.jsonData;
  defoultPosition = 0;
  currentProduct: Producto = this.productList[this.defoultPosition];
  currentImageRoute =
    '../assets/Images/' + this.currentProduct.product + '.jpg';
  stars = Math.trunc(this.currentProduct.rating);
  filtered = false;
  firstFilter(product: Producto) {
    return product.price > 100 && product.price <= 1000;
  }

  updateProduct(product: Producto) {
    this.currentProduct = product;
    this.currentImageRoute =
      '../assets/Images/' + this.currentProduct.product + '.jpg';
  }

  filterBtnIsActive() {
    this.filtered ? null : this.filterProducts();
  }

  resetFilterBtnIsActive() {
    this.filtered ? this.resetFilters() : null;
  }

  filterProducts() {
    this.productList = this.productList.filter((prod) =>
      this.firstFilter(prod)
    );
    this.productList = this.productList.sort(this.sortByPrice());
    this.filtered = !this.filtered;
    this.updateProduct(this.productList[this.defoultPosition]);
  }

  private sortByPrice(): ((a: Producto, b: Producto) => number) | undefined {
    return (a, b) => a.price - b.price;
  }

  resetFilters() {
    this.productList = this.originalList;
    this.filtered = !this.filtered;
    this.updateProduct(this.productList[this.defoultPosition]);
  }

  removeItem() {
    this.productList = this.productList.filter(
      (product) => product.product !== this.currentProduct.product
    );
    this.originalList = this.originalList.filter(
      (product) => product.product !== this.currentProduct.product
    );
    this.updateProduct(this.productList[this.defoultPosition]);
  }
}
