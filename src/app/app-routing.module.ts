import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'food',
    loadChildren: () => import('./feature/shared.module').then(m => m.SharedModule)
  },
  { path: '', redirectTo: '/food/foodlist', pathMatch: 'full' },
  { path: '', redirectTo: '/food/Createfood', pathMatch: 'full' },
  { path: '', redirectTo: '/food/mostraComida', pathMatch: 'full' },
  { path: '**', redirectTo: '/food/foodlist' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
