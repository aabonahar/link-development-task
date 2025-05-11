import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details.component';

export const COURSE_DETAILS: Routes = [
  {  
      path: '',
      component: CourseDetailsComponent,
      data: { breadcrumb: 'Course Details' }
  },
];

