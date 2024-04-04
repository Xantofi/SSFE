import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChange,
} from '@angular/core';
import { Producto } from '../products';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent {
  @Input() imageRoute: string = '';
  @Input() actualProduct!: Producto;
  @Input() fav!: boolean;
  @Output() removeProduct = new EventEmitter<void>();
  @Output() sendRating = new EventEmitter<number>();

  favouriteChangeState() {
    this.fav = !this.fav;
    this.actualProduct.favourite = this.fav;
  }

  onRemoveItem() {
    this.removeProduct.emit();
  }
}
