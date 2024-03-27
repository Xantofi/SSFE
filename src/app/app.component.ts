import { Component } from '@angular/core';
import { datosJson } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mperez_takeup';
  jsonData = datosJson;
  position = 3;
  currentProduct = this.jsonData[this.position];
  currentNumReviews = this.currentProduct.reviews?.length;
  currentProductName = this.currentProduct.product;
  currentPrice = this.currentProduct.price;
  currentCurrency = this.currentProduct.currency;
  currentDescription = this.currentProduct.description;
  currentImageRoute = '../assets/Images/' + this.currentProductName + '.jpg';
  currentSimilarProducts = this.currentProduct.similarProducts;

  hasSimProds =
    this.currentSimilarProducts !== null &&
    this.currentSimilarProducts.length !== 0;
}
