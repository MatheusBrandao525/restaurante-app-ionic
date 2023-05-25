import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  getCategory(): Category[] {
    return [
      {
        id: 1,
        label: 'lanches',
        image: 'assets/img/lanches.png',
        active: false,
      },
      {
        id: 2,
        label: 'pratos de entrada',
        image: 'assets/img/entrada.jpg',
        active: false,
      },
      {
        id: 3,
        label: 'pratos de refeição',
        image: 'assets/img/refeicao.png',
        active: false,
      },
      {
        id: 4,
        label: 'sobremesas',
        image: 'assets/img/sobremesa.jpg',
        active: false,
      },
      {
        id: 5,
        label: 'bebidas',
        image: 'assets/img/bebidas.jpg',
        active: false,
      },
    ];
  }

  getCategoria(id: number): Category | undefined {
    return this.getCategory().find((categoria) => categoria.id === id);
  }
}
