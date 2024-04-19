import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/Interfaces/iProduct';
import { ProductService } from 'src/app/Services/Product/product.service';
import { CustomValidators } from 'src/app/Validators/CustomValidators';

@Component({
  selector: 'app-administration',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class AdministrationComponent {
  productForm: FormGroup = this.formBuilder.group({
    productName: [null, [Validators.required, Validators.minLength(4)]],
    productPrice: [
      null,
      [Validators.required, Validators.min(1), Validators.max(999)],
    ],
    productDescription: [
      null,
      [
        Validators.required,
        Validators.maxLength(350),
        CustomValidators.noSpecialCharactersAllowed,
      ],
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}

  startValidating = false;
  favorite = false;
  success = false;
  defaultImage = 'assets/Images/default.jpg';
  newProduct!: Producto;

  saveProduct() {
    if (this.productForm.valid) {
      this.newProduct = {
        product: this.productForm.get('productName')?.value,
        price: this.productForm.get('productPrice')?.value,
        currency: '€',
        rating: 5,
        description: this.productForm.get('productDescription')?.value,
        favourite: this.favorite,
        image: this.defaultImage,
        similarProducts: [],
      };
      this.productService.addProduct(this.newProduct);
      this.success = true;
    }
  }

  changeFavState() {
    this.favorite = !this.favorite;
  }
}
