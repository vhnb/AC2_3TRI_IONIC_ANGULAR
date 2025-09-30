import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetDetailPageRoutingModule } from './pet-detail-routing.module';

import { PetDetailPage } from './pet-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetDetailPageRoutingModule
  ],
  declarations: [PetDetailPage]
})
export class PetDetailPageModule {}
