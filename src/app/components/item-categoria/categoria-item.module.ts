import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriaItemComponent } from './categoria-item.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CategoriaItemComponent],
  imports: [CommonModule, IonicModule],
  exports: [CategoriaItemComponent],
})
export class CategoriaItemModule {}
