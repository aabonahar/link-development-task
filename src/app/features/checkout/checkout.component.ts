import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  checkoutForm: FormGroup;
  submitted = false;
  private _router = inject(Router)

  constructor(private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      country: ['', [Validators.required, Validators.maxLength(50)]],
      state: ['', [Validators.required, Validators.maxLength(50)]],
      cardName: ['', [Validators.required, Validators.maxLength(100), Validators.pattern(/^[A-Za-z\s]+$/)]],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expiry: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}$/)]],
      cvc: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
    });
  }

  get f() {
    return this.checkoutForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.checkoutForm.invalid) {
      this._router.navigate(['/order-complete'])
      return;
    }
    // Handle successful form submission
    alert('Checkout successful!');
  }
}
