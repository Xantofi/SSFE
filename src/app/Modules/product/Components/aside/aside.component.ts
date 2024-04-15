import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Producto } from '../../../../Interfaces/iProduct';

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

  public onFilterBtnActive(): void {
    this.filterBtnActive.emit();
  }

  public onResetFilterBtnActive(): void {
    this.resetFilterBtnActive.emit();
  }

  public onSelectedProduct(product: Producto): void {
    this.updateProduct.emit(product);
  }
}
