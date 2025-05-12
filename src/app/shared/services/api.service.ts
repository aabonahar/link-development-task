import { environment } from '.././../../environments/environment';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from './dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL =  environment.baseURL

  constructor(private _HttpClient: HttpClient) {}

  getAllBanner(): Observable<any> {
    return this._HttpClient.get(this.baseURL + API_ENDPOINTS.BANNER.GET);
  }

  getAllGallery(): Observable<any> {
    return this._HttpClient.get(this.baseURL + API_ENDPOINTS.GALLERY.GET);
  }

  getAllCourses(): Observable<any> {
    return this._HttpClient.get(this.baseURL + API_ENDPOINTS.COURSES.GET);
  }

  getAllCategories(): Observable<any> {
    return this._HttpClient.get(this.baseURL + API_ENDPOINTS.CATEGORIES.GET);
  }

}
