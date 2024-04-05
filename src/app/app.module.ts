import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './detail/aside/aside.component';
import { PrincipalComponent } from './detail/principal/principal.component';
import { StarsComponent } from './detail/stars/stars.component';
import { SimilarProductsComponent } from './detail/similar-products/similar-products.component';
import { ReviewsComponent } from './detail/reviews/reviews.component';
import { SimProductComponent } from './detail/sim-product/sim-product.component';
import { MainComponent } from './detail/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    PrincipalComponent,
    StarsComponent,
    SimilarProductsComponent,
    ReviewsComponent,
    SimProductComponent,
    MainComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
