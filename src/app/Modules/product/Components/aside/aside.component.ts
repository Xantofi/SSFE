import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Producto } from '../../../../Interfaces/iProduct';
import { CartService } from 'src/app/Services/Cart/cart.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {
  @Input() productList!: Producto[];
  @Input() filtered!: boolean;
  @Output() filterBtnActive = new EventEmitter<void>();
  @Output() resetFilterBtnActive = new EventEmitter<void>();
  @Output() updateProduct = new EventEmitter<Producto>();

  productInCart!: boolean;

  constructor(private cartService: CartService) {}

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
