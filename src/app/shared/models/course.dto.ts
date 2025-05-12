export interface CourseDto {
    id: string;
    title: string;
    description: string;
    hours: number;
    author: string;
    image: string;
    price: number;
    level: string;
    categoryId: number;
    category: string;
    discount: any;
    ratingCount: number;
    lectures: number;
    rating?: number;
  }
  