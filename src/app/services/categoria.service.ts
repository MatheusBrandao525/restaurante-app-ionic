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
        label: 'Lanches',
        image: 'assets/img/lanches.png',
        active: false,
      },
      {
        id: 2,
        label: 'Entradas',
        image: 'assets/img/entradas.png',
        active: false,
      },
      {
        id: 3,
        label: 'Refeições',
        image: 'assets/img/prato-promocao.jpg',
        active: false,
      },
      {
        id: 4,
        label: 'Sobremesas',
        image: 'assets/img/sobremesas.png',
        active: false,
      },
      {
        id: 5,
        label: 'Bebidas',
        image: 'assets/img/bebidas.png',
        active: false,
      },
    ];
  }

  getCategoria(id: number): Category | undefined {
    return this.getCategory().find((categoria) => categoria.id === id);
  }
}
