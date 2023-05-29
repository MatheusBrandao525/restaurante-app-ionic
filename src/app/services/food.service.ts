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
        price: 50,
        image: 'assets/img/prato-promocao.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
      },

    ];
  }

  getFood(id: number): Food | undefined {
    return this.getFoods().find((food) => food.id === id);
  }
}
