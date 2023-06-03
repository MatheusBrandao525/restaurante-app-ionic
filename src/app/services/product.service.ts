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
        title: 'X-burguer',
        price: 26.99,
        image: 'assets/img/x-burguer.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 1,
      },
      {
        id: 1,
        title: 'Churrasquinho de frango',
        price: 17.99,
        image: 'assets/img/churrasquinho-lanche.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 1,
      },
      {
        id: 1,
        title: 'Sanduiche de picanha',
        price: 28.99,
        image: 'assets/img/sanduiche-lanche.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 1,
      },
      {
        id: 1,
        title: 'Cheeseburguer clássico',
        price: 28.99,
        image: 'assets/img/cheeseburguer.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 1,
      },
      {
        id: 1,
        title: 'Hot dog',
        price: 20,
        image: 'assets/img/hot-dog.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 1,
      },
      {
        id: 1,
        title: 'Coxinhas de frango',
        price: 19.99,
        image: 'assets/img/coxinhas.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 2,
      },
      {
        id: 1,
        title: 'Bolinho de bacalhau',
        price: 15.99,
        image: 'assets/img/bolinho.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 2,
      },
      {
        id: 1,
        title: 'Linguiça assada',
        price: 22.99,
        image: 'assets/img/linguica-assada.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 2,
      },
      {
        id: 1,
        title: 'Dadinho de tapioca',
        price: 14.99,
        image: 'assets/img/dadinho.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 2,
      },
      {
        id: 1,
        title: 'Torresmo crocante',
        price: 12.99,
        image: 'assets/img/torresmo.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 2,
      },
      {
        id: 1,
        title: 'Picanha assada',
        price: 35.99,
        image: 'assets/img/picanha.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 3,
      },
      {
        id: 1,
        title: 'Frango à parmegiana',
        price: 40,
        image: 'assets/img/frango-parmegiana.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 3,
      },
      {
        id: 1,
        title: 'Costelinha de porco',
        price: 38.99,
        image: 'assets/img/costelinha.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 3,
      },
      {
        id: 1,
        title: 'Peixe grelhado',
        price: 30,
        image: 'assets/img/peixe.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 3,
      },
      {
        id: 1,
        title: 'Feijoada completa',
        price: 50,
        image: 'assets/img/feijoada.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 3,
      },
      {
        id: 1,
        title: 'Pudim de leite',
        price: 25.99,
        image: 'assets/img/pudim.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 4,
      },
      {
        id: 1,
        title: 'Musse de chocolate',
        price: 12.99,
        image: 'assets/img/musse.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 4,
      },
      {
        id: 1,
        title: 'Torta de limão',
        price: 20,
        image: 'assets/img/torta.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 4,
      },
      {
        id: 1,
        title: 'Petir gateau',
        price: 25,
        image: 'assets/img/peti.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 4,
      },
      {
        id: 1,
        title: 'Brigadeiro',
        price: 15,
        image: 'assets/img/brigadeiro.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 4,
      },
      {
        id: 1,
        title: "Shoop pilsen",
        price: 18,
        image: 'assets/img/shoop.jpg',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 5,
      },
      {
        id: 1,
        title: 'Limonada caseira',
        price: 8,
        image: 'assets/img/limonada-bebida.jpg',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 5,
      },
      {
        id: 1,
        title: 'Água de coco',
        price: 10,
        image: 'assets/img/agua-de-coco.jpg',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 5,
      },
      {
        id: 1,
        title: 'Mojito',
        price: 20,
        image: 'assets/img/mojito-bebida.jpg',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 5,
      },
      {
        id: 1,
        title: 'Suco de laranja',
        price: 10,
        image: 'assets/img/suco.jpg',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
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
