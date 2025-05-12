import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../shared/services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  cartCount = 0;

  constructor(private cartService: CartService) {
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }
}
