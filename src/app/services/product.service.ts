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
        title: 'Baozi',
        price: 15,
        image: 'assets/img/baozi-lanche.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 1,
      },
      {
        id: 1,
        title: 'Char Siu Bao',
        price: 15,
        image: 'assets/img/char-lanche.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 1,
      },
      {
        id: 1,
        title: 'Bolinho no Vapor (Dim Sum)',
        price: 15,
        image: 'assets/img/dinsum-lanche.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 1,
      },
      {
        id: 1,
        title: 'Guioza (Dumplings)',
        price: 15,
        image: 'assets/img/guioza-lanche.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 1,
      },
      {
        id: 1,
        title: 'Rolinho Primavera de Vegetais',
        price: 15,
        image: 'assets/img/rolinho-primavera.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 1,
      },
      {
        id: 1,
        title: 'Jianbing',
        price: 35,
        image: 'assets/img/jianbing-entrada.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 2,
      },
      {
        id: 1,
        title: 'Xiao Long Bao',
        price: 35,
        image: 'assets/img/xiao-entrada.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 2,
      },
      {
        id: 1,
        title: 'Pai Huang Gua',
        price: 35,
        image: 'assets/img/paihuang-entrada.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 2,
      },
      {
        id: 1,
        title: 'Cong You Bing',
        price: 35,
        image: 'assets/img/cong-entrada.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 2,
      },
      {
        id: 1,
        title: 'Dan Dan Mian',
        price: 35,
        image: 'assets/img/dandan-entrada.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 2,
      },
      {
        id: 1,
        title: 'Mapo Tofu',
        price: 40,
        image: 'assets/img/tofu-refeicao.webp',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 3,
      },
      {
        id: 1,
        title: 'Frango Kung Pao',
        price: 45,
        image: 'assets/img/frongo-refeicao.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 3,
      },
      {
        id: 1,
        title: 'Char Siu',
        price: 40,
        image: 'assets/img/charsiu-refeicao.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 3,
      },
      {
        id: 1,
        title: 'Pato à Pequim',
        price: 40,
        image: 'assets/img/pato-refeicao.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 3,
      },
      {
        id: 1,
        title: 'Chow Mein',
        price: 40,
        image: 'assets/img/chowman-refeicao.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 3,
      },
      {
        id: 1,
        title: 'Tangyuan',
        price: 50,
        image: 'assets/img/tangyuan-sobremesa.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 4,
      },
      {
        id: 1,
        title: 'Mooncake',
        price: 45,
        image: 'assets/img/mooncake-sobremesa.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 4,
      },
      {
        id: 1,
        title: 'Baobing',
        price: 35,
        image: 'assets/img/baobing-sobremesa.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 4,
      },
      {
        id: 1,
        title: 'Douhua',
        price: 30,
        image: 'assets/img/douhua-sobremesa.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 4,
      },
      {
        id: 1,
        title: 'Osmanthus Jelly',
        price: 40,
        image: 'assets/img/osmanthus-sobremesa.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 4,
      },
      {
        id: 1,
        title: 'Chá Oolong',
        price: 12,
        image: 'assets/img/chaoolong-bebida.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 5,
      },
      {
        id: 1,
        title: "Chá Pu'er",
        price: 16,
        image: 'assets/img/chapuer-bebida.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 5,
      },
      {
        id: 1,
        title: 'Boba Milk Tea',
        price: 26,
        image: 'assets/img/leite-bebida.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 5,
      },
      {
        id: 1,
        title: 'Jujuba Tea',
        price: 24,
        image: 'assets/img/jujuba-bebida.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
        category: 5,
      },
      {
        id: 1,
        title: 'Bebida de Inverno (Wong Lo Kat)',
        price: 22,
        image: 'assets/img/wong-bebida.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius condimentum mi quis aliquam. Donec sagittis turpis at nulla lobortis, a laoreet nibh gravida. In mauris orci, rutrum ac augue ac, volutpat egestas arcu.',
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
