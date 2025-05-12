import { Component, input } from '@angular/core';

export interface Course {
  price: number;
  category: string;
  title: string;
  instructor: string;
  rating: number;
  ratingCount: number;
  totalHours: number;
  lectureCount: number;
  level: string;
  img: string;
}

@Component({
  selector: 'app-shared-card',
  standalone: true,
  imports: [],
  templateUrl: './shared-card.component.html',
  styleUrl: './shared-card.component.scss'
})
export class SharedCardComponent {
  course = input.required<Course>();
}