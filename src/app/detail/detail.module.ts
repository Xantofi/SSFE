import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { AsideComponent } from '../detail/aside/aside.component';
import { PrincipalComponent } from '../detail/principal/principal.component';
import { StarsComponent } from '../detail/stars/stars.component';
import { SimilarProductsComponent } from '../detail/similar-products/similar-products.component';
import { ReviewsComponent } from '../detail/reviews/reviews.component';
import { SimProductComponent } from '../detail/sim-product/sim-product.component';
import { MainComponent } from '../detail/main/main.component';

@NgModule({
  declarations: [
    DetailComponent,
    AsideComponent,
    PrincipalComponent,
    StarsComponent,
    SimilarProductsComponent,
    ReviewsComponent,
    SimProductComponent,
    MainComponent,
  ],
  imports: [CommonModule],
})
export class DetailModule {}
