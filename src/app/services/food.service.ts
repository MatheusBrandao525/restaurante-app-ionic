import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getFoods(): Food[] {
    return [
      {
        id: 1,
        title: 'Prato do dia',
        price: 49.99,
        image: 'assets/img/pratodia.png',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra urna quis arcu porttitor, interdum imperdiet metus consectetur. Praesent imperdiet justo et accumsan ornare. Sed tristique, metus quis iaculis hendrerit, purus tellus imperdiet orci, luctus ullamcorper lectus ipsum vel odio.',
      },
    ];
  }

  getFood(id: number): Food | undefined {
    return this.getFoods().find((food) => food.id === id);
  }
}
