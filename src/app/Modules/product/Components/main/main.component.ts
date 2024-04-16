import { Component, SimpleChanges } from '@angular/core';
import { type Producto } from '../../../../Interfaces/iProduct';
import { ProductService } from 'src/app/Services/Product/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public productList: Producto[] = [];
  private unfilteredList: Producto[] = [];
  private defoultPosition = 0;
  public currentProduct!: Producto;
  public currentImageRoute = '';
  public fav!: boolean;
  public filtered = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  filterProductsByPrice() {
    //this.filtered ?? this.filterProducts();
    if (this.filtered) {
      return;
    }
    this.filterProducts();
  }

  resetPriceFilter() {
    //this.filtered ? this.resetFilters() : null;
    if (!this.filtered) {
      return;
    }
    this.resetFilters();
  }

  updateProduct(product: Producto) {
    this.currentProduct = product;
    this.currentImageRoute = product.image;
    this.fav = product.favourite;
  }

  removeProduct() {
    this.productList = this.productList.filter(
      (product) => product.product !== this.currentProduct.product
    );
    this.unfilteredList = this.unfilteredList.filter(
      (product) => product.product !== this.currentProduct.product
    );
    this.updateProduct(this.productList[this.defoultPosition]);
  }
  private getProducts() {
    this.productService.products$.subscribe((products) => {
      this.initializeProductData(products);
    });
  }

  private initializeProductData(products: Producto[]) {
    this.productList = products;
    this.unfilteredList = products;
    this.currentProduct = this.productList[this.defoultPosition];
    this.currentImageRoute = this.currentProduct.image;
    this.fav = this.currentProduct.favourite;
  }

  private priceFilter(product: Producto) {
    const minValue = 100;
    const maxValue = 1000;
    return product.price > minValue && product.price <= maxValue;
  }

  private filterProducts() {
    this.productList = this.productList.filter((prod) =>
      this.priceFilter(prod)
    );
    this.sortProducts();
    this.updateFilteredState();
    this.updateProduct(this.productList[this.defoultPosition]);
  }

  private sortProducts() {
    this.productList = this.productList.sort(this.sortByPrice());
  }

  private updateFilteredState() {
    this.filtered = !this.filtered;
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
