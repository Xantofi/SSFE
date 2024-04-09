import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AsideComponent } from '../detail/aside/aside.component';
import { PrincipalComponent } from '../detail/principal/principal.component';
import { StarsComponent } from '../detail/stars/stars.component';
import { SimilarProductsComponent } from '../detail/similar-products/similar-products.component';
import { ReviewsComponent } from '../detail/reviews/reviews.component';
import { SimProductComponent } from '../detail/sim-product/sim-product.component';
import { DetailRoutingModule } from './detail-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    AsideComponent,
    PrincipalComponent,
    StarsComponent,
    SimilarProductsComponent,
    ReviewsComponent,
    SimProductComponent,
  ],
  imports: [CommonModule, DetailRoutingModule],
  exports: [MainComponent],
})
export class DetailModule {}
