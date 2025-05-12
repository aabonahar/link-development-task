import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorgaeService } from './secure-local-storage/local-storage.service';

@Injectable({ providedIn: 'root' })
export class CartService {

  private _secureLocalStorage = inject(LocalStorgaeService);

  private initialCount = Number(this._secureLocalStorage.getJsonValue('cartCount')) || 0;
  private cartCountSource = new BehaviorSubject<number>(this.initialCount);
  cartCount$ = this.cartCountSource.asObservable();

  incrementCart() {
    const newCount = this.cartCountSource.value + 1;
    this.cartCountSource.next(newCount);
    this._secureLocalStorage.setJsonValue('cartCount', newCount.toString());
  }
}
