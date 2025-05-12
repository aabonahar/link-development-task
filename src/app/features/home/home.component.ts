import { Component, OnInit, Injectable, inject } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";
import { GalleryComponent } from './gallery/gallery.component';
import { ApiService } from '../../shared/services/api.service';
import { CoursesComponent } from './courses/courses.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [BannerComponent, GalleryComponent, CoursesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  private _apiServices = inject(ApiService);
  ngOnInit(): void {
    // this.getAllBanner();
  }

 
}
