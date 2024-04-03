import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { PrincipalComponent } from './principal/principal.component';
import { StarsComponent } from './stars/stars.component';
import { SimilarProductsComponent } from './similar-products/similar-products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewComponent } from './review/review.component';
import { SimProductComponent } from './sim-product/sim-product.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AsideComponent, PrincipalComponent, StarsComponent, SimilarProductsComponent, ReviewsComponent, ReviewComponent, SimProductComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
