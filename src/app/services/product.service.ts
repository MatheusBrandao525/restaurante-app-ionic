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
        title: 'Chocolate',
        price: 9.99,
        image: 'assets/img/chocolate.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 4,
      },
      {
        id: 1,
        title: 'Salada de Frutas',
        price: 29.99,
        image: 'assets/img/saladafrutas.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 4,
      },
      {
        id: 1,
        title: 'Sovete',
        price: 20,
        image: 'assets/img/sorvete.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 4,
      },
      {
        id: 1,
        title: 'Fatia de bolo',
        price: 12,
        image: 'assets/img/bolo.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 4,
      },
      {
        id: 1,
        title: 'Cupcake',
        price: 10,
        image: 'assets/img/cupcake.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 4,
      },
      {
        id: 1,
        title: 'Heineken',
        price: 15,
        image: 'assets/img/heineken.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 5,
      },
      {
        id: 1,
        title: 'Whisky Envelhecido',
        price: 70,
        image: 'assets/img/whiskyvelho.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 5,
      },
      {
        id: 1,
        title: 'Coquetel Artesanal',
        price: 20,
        image: 'assets/img/coquitel.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 5,
      },
      {
        id: 1,
        title: 'Vinho Tinto',
        price: 60,
        image: 'assets/img/vinho.png',
        description:
          'Aqui vai uma descrição do produto. Aqui vai uma descrição do produto.',
        category: 5,
      },
      {
        id: 1,
        title: 'Champagne',
        price: 80,
        image: 'assets/img/champagne.png',
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
