import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './Components/administration/new-product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdministrationComponent],
  imports: [CommonModule, AdministrationRoutingModule, ReactiveFormsModule],
})
export class AdministrationModule {}
