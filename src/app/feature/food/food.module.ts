// src/app/features/food/food.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



// Components
import { CreateFoodComponent } from './Components/create-food/create-food.component';
import { ListfoodComponent } from './Components/listfood/listfood.component';


@NgModule({
  declarations: [
    ListfoodComponent,
    CreateFoodComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ListfoodComponent,
    CreateFoodComponent
  ]
})
export class FoodModule { }
