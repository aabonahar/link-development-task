import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryItemDto } from '../../../shared/models/gallery-item.dto';

import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  private _apiServices = inject(ApiService);

  public galleryData: any = [] ;
  ngOnInit(): void {
    this.getAllGallery();
  }

  getAllGallery() {
    this._apiServices.getAllGallery().subscribe({
      next:(data: GalleryItemDto) => {
        this.galleryData = data;        
      }
    })
  }

  // images: GalleryItemDto[] = [
  //   {
  //     image: 'assets/images/01.jpg',
  //     id: 'img-id-1',
  //     altTitle: 'Image 1',
  //     width: 300,
  //     height: 200
  //   },
  //   {
  //     img: 'assets/images/02.jpg',
  //     id: 'img-id-2',
  //     altTitle: 'Image 2',
  //     width: 300,
  //     height: 200
  //   },
  //   {
  //     img: 'assets/images/03.jpg',
  //     id: 'img-id-3',
  //     altTitle: 'Image 3',
  //     width: 300,
  //     height: 200
  //   },
  //   {
  //     img: 'assets/images/04.jpg',
  //     id: 'img-id-4',
  //     altTitle: 'Image 4',
  //     width: 300,
  //     height: 200
  //   },
  //   {
  //     img: 'assets/images/05.jpg',
  //     id: 'img-id-5',
  //     altTitle: 'Image 5',
  //     width: 300,
  //     height: 200
  //   },
  // ];

  currentIndex = 2;
  autoSlideInterval: any;
  isAutoSliding = true;

  getAdjustedIndex(index: number): number {
    const total = this.galleryData.length;
    let adjustedIndex = index - this.currentIndex + 2;
    
    if (adjustedIndex < 0) adjustedIndex += total;
    if (adjustedIndex >= total) adjustedIndex -= total;
    
    return adjustedIndex;
  }

  getItemPosition(index: number): string {
    const adjustedIndex = this.getAdjustedIndex(index);
    
    switch(adjustedIndex) {
      case 0: return '15%';
      case 1: return '30%';
      case 2: return '50%';
      case 3: return '70%';
      case 4: return '85%';
      default: return '50%';
    }
  }

  getItemStyles(index: number): any {
    const adjustedIndex = this.getAdjustedIndex(index);
    
    const styles: any = {
      'left': this.getItemPosition(index),
      'transform': 'translateX(-50%)',
      'z-index': adjustedIndex === 2 ? 2 : adjustedIndex === 1 || adjustedIndex === 3 ? 1 : 0,
      'opacity': adjustedIndex === 2 ? 1 : adjustedIndex === 1 || adjustedIndex === 3 ? 0.8 : 0.4,
    };

    if (adjustedIndex === 2) {
      styles.height = '300px';
      styles.width = '430px';
      styles['box-shadow'] = '-2px 5px 33px 6px rgba(0, 0, 0, 0.35)';
    } else if (adjustedIndex === 1 || adjustedIndex === 3) {
      styles.height = '250px';
      styles.width = '380px';
    } else {
      styles.height = '200px';
      styles.width = '330px';
    }
    
    return styles;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.galleryData.Slider.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.galleryData.Slider.length) % this.galleryData.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }

  getProgressWidth(): string {
    return `${((this.currentIndex + 1) / this.galleryData.Slider.length) * 100}%`;
  }
}
