import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./detail/detail.module').then((module) => module.DetailModule),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./about-us/about-us.module').then(
        (module) => module.AboutUsModule
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
