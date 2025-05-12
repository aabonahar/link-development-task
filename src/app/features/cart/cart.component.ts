import { CartService } from './../../shared/services/cart.service';
import { Component, OnInit, inject, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit, OnDestroy {

  cartCount: number = 0;
  public coursesInMyCart: any[] = [];
  public totalPrice: number = 0; 
  public totalDiscount: number = 0;
  public grandTotal: number = 0;
  public totalItems: number = 0;

  private _cartServices = inject(CartService);
  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    const saved = localStorage.getItem('courses');
    const data: any[] = saved ? JSON.parse(saved) : [];
    this.coursesInMyCart = data;
    this.totalItems = this.coursesInMyCart.length;

    this.calculateTotals();

    this.subscription = this._cartServices.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }

  calculateTotals(): void {
    this.totalPrice = 0;
    this.totalDiscount = 0;
    this.grandTotal = 0;

    this.coursesInMyCart.forEach(course => {
      this.totalPrice += course.price || 0; 
      this.totalDiscount += course.discount || 0; 
      this.grandTotal += (course.price - course.discount) || 0;
    });
  }

  removeItemById(id: string): void {
    const existingArray = this.coursesInMyCart;
    const updatedArray = existingArray.filter((item: any) => item.id !== id);
    this.coursesInMyCart = updatedArray;

    localStorage.setItem('courses', JSON.stringify(updatedArray));

    this.calculateTotals();

    const newCount = this.cartCount - 1;
    this.cartCount = newCount >= 0 ? newCount : 0;
    localStorage.setItem('cartCount', this.cartCount.toString());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
