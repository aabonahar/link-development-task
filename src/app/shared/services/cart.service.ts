import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  private initialCount = Number(localStorage.getItem('cartCount')) || 0;
  private cartCountSource = new BehaviorSubject<number>(this.initialCount);
  cartCount$ = this.cartCountSource.asObservable();

  incrementCart() {
    const newCount = this.cartCountSource.value + 1;
    this.cartCountSource.next(newCount);
    localStorage.setItem('cartCount', newCount.toString());
  }
}
