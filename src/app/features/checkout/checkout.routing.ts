import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';

export const CHECK_OUT: Routes = [
  { 
    path: '',
    component: CheckoutComponent,
    data: { breadcrumb: 'Check Out' }
   },
];

