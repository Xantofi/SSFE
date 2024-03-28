import { Component } from '@angular/core';
import { datosJson } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mperez_takeup';
  jsonData = [...datosJson];
  position = 0; //Quitar lo que sobra
  currentProduct = this.jsonData[this.position];
  currentImageRoute =
    '../assets/Images/' + this.currentProduct.product + '.jpg';
  stars = Math.trunc(this.currentProduct.rating);

  updateProduct(product: any) {
    this.currentProduct = product;
    this.currentImageRoute =
      '../assets/Images/' + this.currentProduct.product + '.jpg';
  }
}
