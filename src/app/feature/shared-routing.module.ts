import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { ListfoodComponent } from './food/Components/listfood/listfood.component';
import { CreateFoodComponent } from './food/Components/create-food/create-food.component';
import { MostrarDetallesComponent } from './food/Components/mostrar-detalles/mostrar-detalles.component';


const routes: Routes = [
  {
    path:'',
    children:[
      { path: 'foodlist', component: ListfoodComponent },
      { path: 'createfood/:id', component: CreateFoodComponent },
      { path: 'createfood', component: CreateFoodComponent },
      { path: 'mostraComida/:id', component: MostrarDetallesComponent },
      { path: '**', component: ListfoodComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
