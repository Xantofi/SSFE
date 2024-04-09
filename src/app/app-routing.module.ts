import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './detail/main/main.component';
import { AboutUsPageComponent } from './about-us/about-us-page/about-us-page.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'about-us', component: AboutUsPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
