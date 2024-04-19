import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductModule } from './Modules/product/product.module';
import { AboutUsModule } from './Modules/about-us/about-us.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DateInterceptor } from './Interceptors/Date/date.interceptor';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    ProductModule,
    AboutUsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: DateInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
