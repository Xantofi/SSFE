import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChange,
} from '@angular/core';
import { Producto } from 'src/app/Interfaces/iProduct';
import { CartService } from 'src/app/Services/Cart/cart.service';

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

  constructor(private cartService: CartService) {}

  changeFavoutiteState() {
    this.fav = !this.fav;
    this.updateFavouriteState();
  }

  onRemoveItem() {
    this.removeProduct.emit();
  }

  addToCart(product: Producto) {
    this.cartService.addToCart(product);
  }

  private updateFavouriteState() {
    this.actualProduct.favourite = this.fav;
  }
}
