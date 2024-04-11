import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChange,
} from '@angular/core';
import { Producto } from '../../interfaces/iProduct';

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

  public changeFavoutiteState() {
    this.fav = !this.fav;
    this.updateFavouriteState();
  }

  public onRemoveItem() {
    this.removeProduct.emit();
  }

  private updateFavouriteState() {
    this.actualProduct.favourite = this.fav;
  }
}
