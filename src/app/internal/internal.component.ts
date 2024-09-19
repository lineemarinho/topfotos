import { Component } from '@angular/core';

@Component({
  selector: 'app-internal',
  templateUrl: './internal.component.html',
  styleUrls: ['./internal.component.css'],
})
export class InternalComponent {
  showCart = false;
  toggleCart() {
    this.showCart = !this.showCart;
  }
}
