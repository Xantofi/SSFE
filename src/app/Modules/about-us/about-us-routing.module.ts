import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './Components/about-us-page/about-us-page.component';

const routes: Routes = [
  {
    path: '',
    component: AboutUsPageComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class AboutUsRoutingModule {}
