import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  categories: Category[] = [];
  foods: Food[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private foodService: FoodService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categories = this.categoriaService.getCategory();
    this.foods = this.foodService.getFoods();
  }

  goToDetailPage(id: number) {
    this.router.navigate(['detail', id]);
  }

  goToCategoriaPage(id: number) {
    this.router.navigate(['categorias', id]);
  }
}
