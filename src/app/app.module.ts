import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { PrincipalComponent } from './principal/principal.component';
import { StarsComponent } from './stars/stars.component';
import { SimilarProductsComponent } from './similar-products/similar-products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SimProductComponent } from './sim-product/sim-product.component';
import { MainComponent } from './main/main.component';

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
