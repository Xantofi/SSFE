import { Component } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
})
export class SubscriptionComponent {
  title: string = 'Subscribe for more info';
  sub_text: string = 'Subscribe to recive updates and join our list';
}
