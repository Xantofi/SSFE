import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../products';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent {
  @Input() imageRoute: string = '';
  @Input() allStars!: string[];
  @Input() actualProduct!: Producto;
  @Output() removeProduct = new EventEmitter<void>();
  @Output() sendRating = new EventEmitter<number>();

  onRemoveItem() {
    this.removeProduct.emit();
  }

  createStars(rating: number): void {
    this.sendRating.emit(rating);
  }
}
