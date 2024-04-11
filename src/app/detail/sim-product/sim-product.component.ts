import { Component, Input } from '@angular/core';
import { iSimilarProduct } from '../../interfaces/iSimilarProduct';

@Component({
  selector: 'app-sim-product',
  templateUrl: './sim-product.component.html',
  styleUrls: ['./sim-product.component.scss'],
})
export class SimProductComponent {
  @Input() simProd!: iSimilarProduct;
}
