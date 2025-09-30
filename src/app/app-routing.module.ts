import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pet-detail',
    loadChildren: () => import('./pages/pet-detail/pet-detail.module').then( m => m.PetDetailPageModule)
  },
  {
    path: 'pet-detail/:id',
    loadChildren: () => import('./pages/pet-detail/pet-detail.module').then( m => m.PetDetailPageModule)
  },
  {
    path: 'caregiver-detail',
    loadChildren: () => import('./pages/caregiver-detail/caregiver-detail.module').then( m => m.CaregiverDetailPageModule)
  },
  {
    path: 'caregiver-detail/:id',
    loadChildren: () => import('./pages/caregiver-detail/caregiver-detail.module').then( m => m.CaregiverDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
