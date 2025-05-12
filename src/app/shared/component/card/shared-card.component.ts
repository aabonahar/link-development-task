import { Component, input } from '@angular/core';
import { CourseDto } from '../../../shared/models/course.dto';

@Component({
  selector: 'app-shared-card',
  standalone: true,
  imports: [],
  templateUrl: './shared-card.component.html',
  styleUrl: './shared-card.component.scss'
})
export class SharedCardComponent {

  // public coursesData  : CourseDto;

  course = input.required<CourseDto>();
}