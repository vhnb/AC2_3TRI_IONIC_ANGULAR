import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaregiverDetailPage } from './caregiver-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CaregiverDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaregiverDetailPageRoutingModule {}
