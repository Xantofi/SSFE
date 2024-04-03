import { Component } from '@angular/core';
import { datosJson } from './products';
import { type Producto } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private jsonData = [...datosJson];
  public productList: Producto[] = this.jsonData;
  private unfilteredList: Producto[] = this.jsonData;
  private defoultPosition = 0;
  public currentProduct: Producto = this.productList[this.defoultPosition];
  public currentImageRoute =
    '../assets/Images/' + this.currentProduct.product + '.jpg';
  private stars = new Array(5).fill('bi-star');
  public allStars: string[] = this.fillStars(this.currentProduct.rating);
  private filtered = false;

  public filterBtnIsActive() {
    this.filtered ? null : this.filterProducts();
  }

  public resetFilterBtnIsActive() {
    this.filtered ? this.resetFilters() : null;
  }

  public updateProduct(product: Producto) {
    this.currentProduct = product;
    this.currentImageRoute = '../assets/Images/' + product.product + '.jpg';
    this.allStars = this.fillStars(product.rating);
  }

  public removeItem() {
    this.productList = this.productList.filter(
      (product) => product.product !== this.currentProduct.product
    );
    this.unfilteredList = this.unfilteredList.filter(
      (product) => product.product !== this.currentProduct.product
    );
    this.updateProduct(this.productList[this.defoultPosition]);
  }

  private fillStars(rating: number): string[] {
    this.stars.fill('bi-star');
    const fullStars = Math.trunc(rating);
    this.stars.fill('bi-star-fill', 0, fullStars);

    if (this.hasHalfStar(rating)) {
      this.stars[fullStars] = 'bi-star-half';
    }
    return this.stars;
  }

  private hasHalfStar(rating: number): boolean {
    return rating % 1 > 0;
  }

  private firstFilter(product: Producto) {
    return product.price > 100 && product.price <= 1000;
  }

  private filterProducts() {
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

  private resetFilters() {
    this.productList = this.unfilteredList;
    this.filtered = !this.filtered;
    this.updateProduct(this.productList[this.defoultPosition]);
  }
}
