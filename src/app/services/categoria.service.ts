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
        image: 'assets/img/lanche.png',
        active: false,
      },
      {
        id: 2,
        label: 'Entradas',
        image: 'assets/img/petisco.png',
        active: false,
      },
      {
        id: 3,
        label: 'Refeições',
        image: 'assets/img/refeicao.png',
        active: false,
      },
      {
        id: 4,
        label: 'Sobremesas',
        image: 'assets/img/sobremesa.png',
        active: false,
      },
      {
        id: 5,
        label: 'Bebidas',
        image: 'assets/img/bebida.png',
        active: false,
      },
    ];
  }

  getCategoria(id: number): Category | undefined {
    return this.getCategory().find((categoria) => categoria.id === id);
  }
}
