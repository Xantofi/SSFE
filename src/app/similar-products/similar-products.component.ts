import { Component, Input } from '@angular/core';
import { type Producto } from '../products';

@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.scss'],
})
export class SimilarProductsComponent {
  @Input() actualProduct!: Producto;
}
