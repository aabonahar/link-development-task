import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-course-details',
  imports: [RouterModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent {

  cartCount = 0;

  constructor(private cartService: CartService) {
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }

  addToCart() {
    this.cartService.incrementCart();
  }
  
}
