import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



//modulos
import { FoodModule } from './food/food.module';
import { ShareddModule } from './sharedd/sharedd.module';
import { SharedRoutingModule } from './shared-routing.module';

// components
import { NadvarComponent } from './sharedd/components/nadvar/nadvar.component';






@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FoodModule,
    ShareddModule,
    SharedRoutingModule
  ],exports:[
    NadvarComponent
  ]
})
export class SharedModule { }
