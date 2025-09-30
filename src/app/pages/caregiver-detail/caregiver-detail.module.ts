import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaregiverDetailPageRoutingModule } from './caregiver-detail-routing.module';

import { CaregiverDetailPage } from './caregiver-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaregiverDetailPageRoutingModule
  ],
  declarations: [CaregiverDetailPage]
})
export class CaregiverDetailPageModule {}
