import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../shared/services/cart.service';
import { Router, RouterLink } from '@angular/router';
import { CourseDto } from '../../shared/models/course.dto';
import { LocalStorgaeService } from '../../shared/services/secure-local-storage/local-storage.service';

@Component({
  selector: 'app-course-details',
  imports: [RouterModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent {

  public cartCount: any;
  public courseDetailsData: CourseDto | any;

  constructor(private cartService: CartService, private _router: Router, private _secureLocalStorage: LocalStorgaeService) {
    this.getCourseDetailsFromNavigate();
    this.trackCartCount();
  }

  addToCart() {
    const newItem = this.courseDetailsData;
    const saved = this._secureLocalStorage.getJsonValue("courses");
    const existingArray: { id: number; name: string }[] = saved ? JSON.parse(saved) : [];
    existingArray.push(newItem);
    this._secureLocalStorage.setJsonValue("courses", JSON.stringify(existingArray));
    this.cartService.incrementCart();
  }

  getCourseDetailsFromNavigate() {
    const navigation = this._router.getCurrentNavigation();
    const state = navigation?.extras.state as { courseData: any };
    this.courseDetailsData = state.courseData;
    console.log(state);
    if (state == undefined) {
      this._router.navigate(['/'])
    }
  }

  trackCartCount() {
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
      this._secureLocalStorage.setJsonValue('cartCount', this.cartCount.toString())
    });
  }

}
