import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DetailModule } from './detail/detail.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, DetailModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
