import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses = [
    { id: 1, title: 'course1', autor: 'autor1', duration: 88, type: 'free',price: 100.00, rating: 4.5, image: 'https://itproger.com/img/courses/1532598979.jpg', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },

    { id: 2, title: 'course2', autor: 'autor2', duration: 88, type: 'premium',price: 100.00, rating: 4.5, image: 'https://itproger.com/img/courses/1532598979.jpg', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },

    { id: 3, title: 'course3', autor: 'autor3', duration: 88, type: 'free',price: 100.00, rating: 4.5, image: 'https://itproger.com/img/courses/1532598979.jpg', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },

    { id: 4, title: 'course4', autor: 'autor4', duration: 88, type: 'free',price: 100.00, rating: 4.5, image: 'https://itproger.com/img/courses/1532598979.jpg', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },

    { id: 5, title: 'course5', autor: 'autor5', duration: 88, type: 'premium',price: 100.00, rating: 4.5, image: 'https://itproger.com/img/courses/1532598979.jpg', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },

    { id: 6, title: 'course6', autor: 'autor6', duration: 88, type: 'free',price: 100.00, rating: 4.5, image: 'https://itproger.com/img/courses/1532598979.jpg', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },

    { id: 7, title: 'course7', autor: 'autor7', duration: 88, type: 'premium',price: 100.00, rating: 4.5, image: 'https://itproger.com/img/courses/1532598979.jpg', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },

    { id: 8, title: 'course8', autor: 'autor8', duration: 88, type: 'free',price: 100.00, rating: 4.5, image: 'https://itproger.com/img/courses/1532598979.jpg', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },
  ]

}
