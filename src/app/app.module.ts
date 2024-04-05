import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DetailModule } from './detail/detail.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, DetailModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
