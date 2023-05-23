import { NgModule } from '@angular/core';
import { BadgeComponent } from './badge.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [BadgeComponent],
  imports: [CommonModule, IonicModule],
  exports: [BadgeComponent],
})
export class BadgeModule {}
