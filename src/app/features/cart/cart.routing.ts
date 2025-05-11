import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';

export  const CART_ROUTES: Routes = [
  { 
      path: '',
      component: CartComponent,
      data: { breadcrumb: 'Cart' }
   },
];