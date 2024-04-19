import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { AsideComponent } from './Components/aside/aside.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { ReviewsComponent } from './Components/reviews/reviews.component';
import { SimProductComponent } from './Components/sim-product/sim-product.component';
import { SimilarProductsComponent } from './Components/similar-products/similar-products.component';
import { StarsComponent } from './Components/stars/stars.component';
import { CartPageComponent } from './Components/cart-page/cart-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AsideComponent,
    PrincipalComponent,
    StarsComponent,
    SimilarProductsComponent,
    ReviewsComponent,
    SimProductComponent,
    CartPageComponent,
  ],
  imports: [CommonModule, ProductRoutingModule],
  exports: [HomePageComponent],
})
export class ProductModule {}
