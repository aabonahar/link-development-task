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
  }
  


  img1Transform = 'translate(0px, 0px)';
  img2Transform = 'translate(0px, 0px)';

  onMouseMove(event: MouseEvent) {
    const offsetX = (event.clientX / window.innerWidth - 0.5) * 20; // ±10px
    const offsetY = (event.clientY / window.innerHeight - 0.5) * 20;

    this.img1Transform = `translate(${offsetX}px, ${offsetY}px)`;
    this.img2Transform = `translate(${-offsetX}px, ${-offsetY}px)`; // عكس الاتجاه
  }
}
