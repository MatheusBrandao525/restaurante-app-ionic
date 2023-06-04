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
        price: 80.0,
        image: 'assets/img/picanha-chapa-refeicao.png',
        description: 'Aqui vai a descrição do do produto.',
      },
    ];
  }

  getFood(id: number): Food | undefined {
    return this.getFoods().find((food) => food.id === id);
  }
}
