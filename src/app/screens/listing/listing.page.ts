import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  categories: Category[] = [];
  foods: Food[] = [];

  constructor(private foodService: FoodService, private router: Router) {}

  ngOnInit() {
    this.getCategories();
    this.foods = this.foodService.getFoods();
  }

  getCategories() {
    this.categories = [
      {
        id: 1,
        label: 'all',
        image: 'assets/img/all.jpg',
        active: true,
      },
      {
        id: 2,
        label: 'lanches',
        image: 'assets/img/lanches.jpg',
        active: false,
      },
      {
        id: 3,
        label: 'pratos de entrada',
        image: 'assets/img/prato-entrada.jpg',
        active: false,
      },
      {
        id: 4,
        label: 'pratos de refeição',
        image: 'assets/img/prato-refeicao.jpg',
        active: false,
      },
      {
        id: 5,
        label: 'sobremesas',
        image: 'assets/img/sobremesas.jpg',
        active: false,
      },
      {
        id: 6,
        label: 'bebidas',
        image: 'assets/img/bebida.jpg',
        active: false,
      },
    ];
  }

  goToDetailPage(id: number) {
    this.router.navigate(['detail', id]);
  }
}
