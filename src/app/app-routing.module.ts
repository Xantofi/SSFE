import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./Modules/product/product.module').then(
        (module) => module.DetailModule
      ),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./Modules/about-us/about-us.module').then(
        (module) => module.AboutUsModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./Modules/administration/administration.module').then(
        (module) => module.AdministrationModule
      ),
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
