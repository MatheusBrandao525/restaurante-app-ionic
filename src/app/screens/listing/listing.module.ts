import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingPageRoutingModule } from './listing-routing.module';

import { ListingPage } from './listing.page';
import { SearchbarModule } from 'src/app/components/searchbar/searchbar.module';
import { CategoriaItemModule } from 'src/app/components/item-categoria/categoria-item.module';
import { FoodCardModule } from 'src/app/components/food-card/food-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingPageRoutingModule,
    SearchbarModule,
    CategoriaItemModule,
    FoodCardModule,
  ],
  declarations: [ListingPage],
})
export class ListingPageModule {}
