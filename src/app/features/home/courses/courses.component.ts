import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCardComponent } from '../../../shared/component/card/shared-card.component';
import { ApiService } from '../../../shared/services/api.service';
import { CourseDto } from '../../../shared/models/course.dto';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, SharedCardComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  private _apiServices = inject(ApiService);
  private _router = inject(Router);

  public coursesData: any = [];
  public categoriesData: any = [];

  ngOnInit(): void {
    this.getAllCourses();
    this.getAllCategories();
  }
  getAllCourses() {
    this._apiServices.getAllCourses().subscribe({
      next: (data: CourseDto) => {
        console.log(data);
        this.coursesData = data;
      }
    })
  }


  getAllCategories() {
    this._apiServices.getAllCategories().subscribe({
      next: (data: CourseDto) => {
        console.log(data);
        
        this.categoriesData = data;
      }
    })
  }
  navigateToCourseDetails(courseData: any) {
    this._router.navigate(['/course-details'], {
      state: { courseData }
    });
  }

}
