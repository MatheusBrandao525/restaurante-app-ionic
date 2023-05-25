import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Product[] {
    return [
      {
        id: 1,
        title: 'Pastel',
        price: 20,
        image: 'assets/img/pastel.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 1,
      },
      {
        id: 1,
        title: 'Coxinha',
        price: 20,
        image: 'assets/img/coxinha.jpeg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 1,
      },
      {
        id: 1,
        title: 'Enrroladinho',
        price: 20,
        image: 'assets/img/enrroladinho.webp',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 1,
      },
      {
        id: 1,
        title: 'Misto quente',
        price: 20,
        image: 'assets/img/misto.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 1,
      },
      {
        id: 1,
        title: 'Hamburguer',
        price: 20,
        image: 'assets/img/hamburguer.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 1,
      },
      {
        id: 1,
        title: 'Castanhas',
        price: 20,
        image: 'assets/img/castanhas.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 2,
      },
      {
        id: 1,
        title: 'Salada de frutas',
        price: 20,
        image: 'assets/img/frutas.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 2,
      },
      {
        id: 1,
        title: 'Macarrão',
        price: 20,
        image: 'assets/img/macarrao.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 2,
      },
      {
        id: 1,
        title: 'Queijos',
        price: 20,
        image: 'assets/img/queijos.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 2,
      },
      {
        id: 1,
        title: 'Tabua de petiscos',
        price: 20,
        image: 'assets/img/tabua-petiscos.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 2,
      },
      {
        id: 1,
        title: 'Prato feito feijoada',
        price: 20,
        image: 'assets/img/feijoada.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 3,
      },
      {
        id: 1,
        title: 'Prato feito sushi',
        price: 20,
        image: 'assets/img/sushi.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 3,
      },
      {
        id: 1,
        title: 'Prato feito strogonoff',
        price: 20,
        image: 'assets/img/strogonofe.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 3,
      },
      {
        id: 1,
        title: 'Prato feito salada',
        price: 20,
        image: 'assets/img/salada.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 3,
      },
      {
        id: 1,
        title: 'Prato feito churrasco',
        price: 20,
        image: 'assets/img/churrasco.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 3,
      },
      {
        id: 1,
        title: 'Bolo de chocolate',
        price: 20,
        image: 'assets/img/bolo-chocolate.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 4,
      },
      {
        id: 1,
        title: 'Muse de maracujá',
        price: 20,
        image: 'assets/img/muse.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 4,
      },
      {
        id: 1,
        title: 'Pudim',
        price: 20,
        image: 'assets/img/pudim.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 4,
      },
      {
        id: 1,
        title: 'Chocolate',
        price: 20,
        image: 'assets/img/chocolate.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 4,
      },
      {
        id: 1,
        title: 'Sorvete de morango',
        price: 20,
        image: 'assets/img/sorvete.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 4,
      },
      {
        id: 1,
        title: 'Água',
        price: 20,
        image: 'assets/img/agua.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 5,
      },
      {
        id: 1,
        title: 'Suco natural',
        price: 20,
        image: 'assets/img/suco-natural.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 5,
      },
      {
        id: 1,
        title: 'Vinho',
        price: 20,
        image: 'assets/img/vinho.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 5,
      },
      {
        id: 1,
        title: 'Refrigerante',
        price: 20,
        image: 'assets/img/refrigerante.jpg',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 5,
      },
      {
        id: 1,
        title: 'Cerveja',
        price: 20,
        image: 'assets/img/cerveja.png',
        description:
          'uma breve descrição do produto que sera exibido ao cliente',
        category: 5,
      },
    ];
  }

  getCategory(category: number): Product[] | undefined {
    return this.getProducts().filter(
      (product) => product.category === category
    );
  }
}
