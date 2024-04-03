import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Producto } from '../products';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {
  @Input() productList!: Producto[];
  @Output() filterBtnActive = new EventEmitter<void>();
  @Output() resetFilterBtnActive = new EventEmitter<void>();
  @Output() updateProduct = new EventEmitter<Producto>();

  onFilterBtnActive(): void {
    this.filterBtnActive.emit();
  }

  onResetFilterBtnActive(): void {
    this.resetFilterBtnActive.emit();
  }

  onSelectedProduct(product: Producto): void {
    this.updateProduct.emit(product);
  }
}
