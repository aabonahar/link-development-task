import { CommonModule } from '@angular/common';
import { Component, OnInit, Injectable, inject } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
@Component({
  selector: 'app-banner',
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {

  private _apiServices = inject(ApiService);
  
  ngOnInit(): void {
    this.getAllBanner();
  }
  
  getAllBanner() {
    this._apiServices.getAllBanner().subscribe({
      next: (data) => {
        console.log(data);
        
      }
    })
  }
}
