import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-fixed',
  templateUrl: './cart-fixed.component.html',
  styleUrls: ['./cart-fixed.component.css'],
})
export class CartFixedComponent {
  cartItemCount = 3;
  card = false;
  totalPrice = 299.99;

  viewCart() {
    this.card = true;
  }
}
