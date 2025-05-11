import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  checkoutForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.checkoutForm = this.fb.group({
      country: ['', Validators.required],
      state: ['', Validators.required],
      cardName: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expiry: ['', Validators.required],
      cvc: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
    });
  }

  get f() {
    return this.checkoutForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.checkoutForm.invalid) {
      return;
    }
    // Handle successful form submission
    alert('Checkout successful!');
  }
}
