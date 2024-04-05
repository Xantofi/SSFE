import { Component, Input } from '@angular/core';
import { Producto } from '../../products';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
  @Input() actualProduct!: Producto;
}
