import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DetailModule } from './detail/detail.module';
import { AboutUsModule } from './about-us/about-us.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, DetailModule, AboutUsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
