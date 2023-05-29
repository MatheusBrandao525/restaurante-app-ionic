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
        title: 'Hamburguer Classico',
        price: 25,
        image: 'assets/img/hamburguer-lanche.png',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 1,
      },
      {
        id: 1,
        title: 'Tostex de Qeijo',
        price: 15,
        image: 'assets/img/tostex-lanche.png',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 1,
      },
      {
        id: 1,
        title: 'Sanduiche de Atum',
        price: 25,
        image: 'assets/img/atum-lanche.png',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 1,
      },
      {
        id: 1,
        title: 'Burrito',
        price: 15,
        image: 'assets/img/burrito-lanche.png',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 1,
      },
      {
        id: 1,
        title: 'Tacos',
        price: 20,
        image: 'assets/img/tacos-lanche.png',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 1,
      },
      {
        id: 1,
        title: 'Bruschetta',
        price: 10,
        image: 'assets/img/bruschetta-entrada.png',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 2,
      },
      {
        id: 1,
        title: 'Ceviche',
        price: 15,
        image: 'assets/img/ceviche-entrada.png',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 2,
      },
      {
        id: 1,
        title: 'Caprese',
        price: 15,
        image: 'assets/img/caprese-entrada.png',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 2,
      },
      {
        id: 1,
        title: 'Guacamole com chips',
        price: 20,
        image: 'assets/img/guaca-entrada.png',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 2,
      },
      {
        id: 1,
        title: 'Tabule',
        price: 15,
        image: 'assets/img/tabule-entrada.png',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 2,
      },
      {
        id: 1,
        title: 'Frango Assado',
        price: 40,
        image: 'assets/img/frango-refeicao.jpg',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 3,
      },
      {
        id: 1,
        title: 'Espaguete',
        price: 40,
        image: 'assets/img/espaguete-refeicao.jpg',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 3,
      },
      {
        id: 1,
        title: 'Salmão Grelhado',
        price: 40,
        image: 'assets/img/salmao-refeicao.jpg',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 3,
      },
      {
        id: 1,
        title: 'Bife Grelhado',
        price: 40,
        image: 'assets/img/bife-refeicao.jpg',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 3,
      },
      {
        id: 1,
        title: 'Risoto de Cogumelos',
        price: 40,
        image: 'assets/img/ridoto-refeicao.jpg',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 3,
      },
      {
        id: 1,
        title: 'Brownie com Sorvete',
        price: 20,
        image: 'assets/img/brownie-sobremesa.jpg',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 4,
      },
      {
        id: 1,
        title: 'Tiramisu Italiano',
        price: 20,
        image: 'assets/img/tiramisu-sobremesa.jpg',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 4,
      },
      {
        id: 1,
        title: 'Frutas Grelhadas',
        price: 20,
        image: 'assets/img/frutas-sobremesa.jpg',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 4,
      },
      {
        id: 1,
        title: 'Pudim de caramelo',
        price: 20,
        image: 'assets/img/pudim-sobremesa.jpg',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 4,
      },
      {
        id: 1,
        title: 'Cheesecake de Morango',
        price: 25,
        image: 'assets/img/cheesecake-sobremesa.jpg',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 4,
      },
      {
        id: 1,
        title: 'Mojito',
        price: 12,
        image: 'assets/img/mojito-bebida.jpg',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 5,
      },
      {
        id: 1,
        title: "Smoothie de Frutas",
        price: 15,
        image: 'assets/img/smoothie-bebida.jpg',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 5,
      },
      {
        id: 1,
        title: 'Limonada caseira',
        price: 8,
        image: 'assets/img/limonada-bebida.jpg',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 5,
      },
      {
        id: 1,
        title: 'Chá gelado',
        price: 8,
        image: 'assets/img/cha-bebida.jpg',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 5,
      },
      {
        id: 1,
        title: 'Água aromatizada',
        price: 10,
        image: 'assets/img/agua-bebida.jpg',
        description:
          'Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
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
