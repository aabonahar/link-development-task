import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../shared/services/cart.service';
import { Router, RouterLink } from '@angular/router';
import { CourseDto } from '../../shared/models/course.dto';

@Component({
  selector: 'app-course-details',
  imports: [RouterModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent {

  public cartCount: any;
  public courseDetailsData: CourseDto | any;

  constructor(private cartService: CartService, private _router: Router) {
    this.getCourseDetailsFromNavigate();
    this.trackCartCount();
  }

  addToCart() {
    const newItem = this.courseDetailsData;
    const saved = localStorage.getItem("courses");
    const existingArray: { id: number; name: string }[] = saved ? JSON.parse(saved) : [];
    existingArray.push(newItem);
    localStorage.setItem("courses", JSON.stringify(existingArray));
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
      localStorage.setItem('cartCount', this.cartCount.toString())
    });
  }

}
