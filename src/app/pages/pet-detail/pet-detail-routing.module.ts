import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetDetailPage } from './pet-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PetDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetDetailPageRoutingModule {}
