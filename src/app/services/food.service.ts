import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class FooService {
  getFoods(): Food[] {
    return [
      {
        id: 1,
        title: 'Prato feito',
        price: 20,
        image: 'assets/img/prato-feito.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
      },
      {
        id: 2,
        title: 'Batata frita',
        price: 10,
        image: 'assets/img/prato-feito.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
      },
      {
        id: 3,
        title: 'X-tudo',
        price: 25,
        image: 'assets/img/prato-feito.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
      },
      {
        id: 4,
        title: 'X-salada',
        price: 25,
        image: 'assets/img/prato-feito.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
      },
      {
        id: 5,
        title: 'X-bacon',
        price: 28,
        image: 'assets/img/prato-feito.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
      },
      {
        id: 6,
        title: 'X-familia',
        price: 50,
        image: 'assets/img/prato-feito.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
      },
    ];
  }

  getFood(id: number): Food | undefined {
    return this.getFoods().find((food) => food.id === id);
  }
}
