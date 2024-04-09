import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from '../about-us/subscription/subscription.component';
import { MoreAboutUsComponent } from '../about-us/more-about-us/more-about-us.component';
import { MoreInfoComponent } from '../about-us/more-info/more-info.component';
import { AboutUsPageComponent } from '../about-us/about-us-page/about-us-page.component';
import { AboutUsRoutingModule } from './about-us-routing.module';

@NgModule({
  declarations: [
    SubscriptionComponent,
    MoreAboutUsComponent,
    MoreInfoComponent,
    AboutUsPageComponent,
  ],
  imports: [CommonModule, AboutUsRoutingModule],
  exports: [AboutUsPageComponent],
})
export class AboutUsModule {}
