import { SingUpComponent } from './features/auth/sing-up/sing-up.component';
import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [

    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
              },
              {
                path: 'course-details/:id',
                loadChildren: () => import('./features/course-details/course-details.routing').then(m => m.COURSE_DETAILS)
              },
              {
                path: 'cart',
                loadChildren: () => import('./features/cart/cart.routing').then(m => m.CART_ROUTES)
              },
              {
                path: 'checkout',
                loadChildren: () => import('./features/checkout/checkout.routing').then(m => m.CHECK_OUT)
              },
              {
                path: 'order-complete',
                loadComponent: () => import('./features/order-status/complete/complete.component').then(m => m.CompleteComponent)
              },
              {
                path: 'order-faild',
                loadComponent: () => import('./features/order-status/faild/faild.component').then(m => m.FaildComponent)
              }
        ]
        
    },
    {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'signup',
        loadComponent: () => import('./features/auth/sing-up/sing-up.component').then(m => m.SingUpComponent)
      },
      {
        path: '**',
        redirectTo: 'not-found-page'
      }
];
