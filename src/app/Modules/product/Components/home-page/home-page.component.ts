import { Component } from '@angular/core';
import { type Producto } from 'src/app/Interfaces/iProduct';
import { ProductService } from 'src/app/Services/Product/product.service';
import { CartService } from 'src/app/Services/Cart/cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  productList: Producto[] = [];
  private unfilteredList: Producto[] = [];
  private defoultPosition = 0;
  currentProduct!: Producto;
  fav!: boolean;
  filtered = false;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

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
    this.fav = product.favourite;
  }

  removeProduct() {
    this.cartService.removeAllInstances(this.currentProduct);
    this.productList = this.productList.filter(
      (product) => product.product !== this.currentProduct.product
    );
    this.unfilteredList = this.unfilteredList.filter(
      (product) => product.product !== this.currentProduct.product
    );
    this.updateProduct(this.productList[this.defoultPosition]);
  }

  productIsFavoriteStyle() {
    if (this.productList.length) {
      return {
        'background-color': this.currentProduct.favourite
          ? '#505050'
          : 'transparent',
        color: this.currentProduct.favourite ? 'white' : 'black',
      };
    }
    return;
  }

  hasSimilarProducts() {
    if (this.productList.length) {
      return this.currentProduct.similarProducts.length;
    }
    return;
  }

  hasReviews() {
    if (this.productList.length) {
      return this.currentProduct.reviews?.length;
    }
    return;
  }

  private getProducts() {
    this.productService.products$.subscribe((products) => {
      if (products.length) {
        this.initializeProductData(products);
      }
    });
  }

  private initializeProductData(products: Producto[]) {
    this.productList = products;
    this.unfilteredList = products;
    this.currentProduct = products[this.defoultPosition];
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
