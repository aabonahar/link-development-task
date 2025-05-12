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

  cartCount: any;

  constructor(private cartService: CartService) {
    this.cartCount = localStorage.getItem('cartCount')
    this.cartService.cartCount$.subscribe(count => {
      console.log(count);
      
      this.cartCount = count;
    });
  }
}
