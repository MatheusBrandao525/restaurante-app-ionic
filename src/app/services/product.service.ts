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
        title: 'X-tudo',
        price: 29.99,
        image: 'assets/img/x-tudo.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 1,
      },
      {
        id: 1,
        title: 'Batata frita',
        price: 18.99,
        image: 'assets/img/batata-frita.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 1,
      },
      {
        id: 1,
        title: 'pizza',
        price: 38.99,
        image: 'assets/img/pizza.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 1,
      },
      {
        id: 1,
        title: 'Tapioca',
        price: 9.89,
        image: 'assets/img/tapioca.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 1,
      },
      {
        id: 1,
        title: 'Quibe',
        price: 12,
        image: 'assets/img/quibe.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 1,
      },
      {
        id: 1,
        title: 'Salada de ovos',
        price: 15,
        image: 'assets/img/salada-ovos.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 2,
      },
      {
        id: 1,
        title: 'Salada de frutas',
        price: 15,
        image: 'assets/img/frutas.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 2,
      },
      {
        id: 1,
        title: 'Peixe frito',
        price: 15,
        image: 'assets/img/peixe-frito.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 2,
      },
      {
        id: 1,
        title: 'Farofa',
        price: 20,
        image: 'assets/img/farofa.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 2,
      },
      {
        id: 1,
        title: 'Açai',
        price: 15,
        image: 'assets/img/acai.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 2,
      },
      {
        id: 1,
        title: 'Prato feito feijoada',
        price: 28.99,
        image: 'assets/img/feijoada.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 3,
      },
      {
        id: 1,
        title: 'Prato feito churrasco',
        price: 35,
        image: 'assets/img/churrasco.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 3,
      },
      {
        id: 1,
        title: 'Prato feito sushi',
        price: 30,
        image: 'assets/img/sushi.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 3,
      },
      {
        id: 1,
        title: 'Prato feito strogonoff',
        price: 18.99,
        image: 'assets/img/strogonofe.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 3,
      },
      {
        id: 1,
        title: 'Prato feito salada',
        price: 15,
        image: 'assets/img/salada.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 3,
      },
      {
        id: 1,
        title: 'Pavê de chocolate',
        price: 25,
        image: 'assets/img/pave.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 4,
      },
      {
        id: 1,
        title: 'Milkshake',
        price: 15,
        image: 'assets/img/milkshake.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 4,
      },
      {
        id: 1,
        title: 'Flã de morango',
        price: 25,
        image: 'assets/img/fla-morango.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 4,
      },
      {
        id: 1,
        title: 'Bolo de milho',
        price: 28.99,
        image: 'assets/img/bolo-milho.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 4,
      },
      {
        id: 1,
        title: 'Pudim de chocolate',
        price: 18.99,
        image: 'assets/img/pudim-chocolate.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 4,
      },
      {
        id: 1,
        title: 'Água',
        price: 10,
        image: 'assets/img/agua.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 5,
      },
      {
        id: 1,
        title: 'Limonada',
        price: 8,
        image: 'assets/img/limonada.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 5,
      },
      {
        id: 1,
        title: 'Champanhe',
        price: 68.99,
        image: 'assets/img/champagne.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 5,
      },
      {
        id: 1,
        title: 'Coca Cola',
        price: 12,
        image: 'assets/img/coca.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
        category: 5,
      },
      {
        id: 1,
        title: 'Cerveja',
        price: 15.99,
        image: 'assets/img/cerveja.jpg',
        description:
          ' Curabitur risus mauris, interdum vel nisl sed, tempus viverra elit. Integer gravida, diam quis consequat luctus, nisi purus luctus velit, sed porttitor ipsum nunc ut nisi. Nullam turpis mi, lobortis ac mollis eu, tristique vel nisl. Suspendisse potenti. Phasellus pellentesque lorem lectus, vitae tincidunt risus elementum a. Nunc ornare elit nec lacinia vulputate. Sed quis elit et nulla viverra facilisis.',
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
