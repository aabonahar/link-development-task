import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCardComponent, Course } from '../../../shared/component/card/shared-card.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, SharedCardComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  routingList: { listText: string; onGetCourse: () => void }[] = [
    {
      listText: 'All',
      onGetCourse: () => { }
    },
    {
      listText: 'Development',
      onGetCourse: () => { }
    },
    {
      listText: 'Data Science',
      onGetCourse: () => { }
    },
    {
      listText: 'DevOps',
      onGetCourse: () => { }
    },
    {
      listText: 'Cloud Computing',
      onGetCourse: () => { }
    },
  ];

  courses: Course[] = [
    {
      price: 199.9,
      category: 'Development',
      title: 'Full Stack Web Development',
      instructor: 'Jane Doe',
      rating: 5,
      ratingCount: 150,
      totalHours: 22,
      lectureCount: 155,
      level: 'Beginner',
      img: './../../assets/01.jpg'
    },
    {
      price: 249.9,
      category: 'Development',
      title: 'Mobile App Development',
      instructor: 'John Smith',
      rating: 5,
      ratingCount: 200,
      totalHours: 42,
      lectureCount: 115,
      level: 'Beginner',
      img: 'assets/images/02.jpg'
    },
    {
      price: 199.9,
      category: 'Cloud Computing',
      title: 'DevOps Essentials',
      instructor: 'Mike Brown',
      rating: 5,
      ratingCount: 75,
      totalHours: 18,
      lectureCount: 10,
      level: 'Beginner',
      img: './../../assets/03.jpg'
    },
    {
      price: 259.9,
      category: 'Development',
      title: 'JavaScript Algorithms',
      instructor: 'Tom Wilson',
      rating: 5,
      ratingCount: 180,
      totalHours: 58,
      lectureCount: 50,
      level: 'Intermediate',
      img: './../../assets/04.jpg'
    }
  ];
}
