// src/app/features/food/food.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule


// Components
import { CreateFoodComponent } from './Components/create-food/create-food.component';
import { ListfoodComponent } from './Components/listfood/listfood.component';
import { MostrarDetallesComponent } from './Components/mostrar-detalles/mostrar-detalles.component';



@NgModule({
  declarations: [
    ListfoodComponent,
    CreateFoodComponent,
    MostrarDetallesComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    RouterLink,
    FormsModule
  ],
  exports: [
    ListfoodComponent,
    CreateFoodComponent,
    MostrarDetallesComponent,
  ],providers: []
})
export class FoodModule { }
