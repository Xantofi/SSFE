import { Component, Input } from '@angular/core';
import { Producto, iSimilarProduct } from '../products';

@Component({
  selector: 'app-sim-product',
  templateUrl: './sim-product.component.html',
  styleUrls: ['./sim-product.component.scss'],
})
export class SimProductComponent {
  @Input() simProd!: iSimilarProduct;
  @Input() allStars!: string[];
}
