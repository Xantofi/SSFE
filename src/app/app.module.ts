import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DetailModule } from './detail/detail.module';
import { AboutUsModule } from './about-us/about-us.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    DetailModule,
    AboutUsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
