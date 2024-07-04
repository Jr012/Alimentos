import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NadvarComponent } from './components/nadvar/nadvar.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    NadvarComponent
  ],
  imports: [
    CommonModule,
    RouterLink

  ],exports:[
    NadvarComponent
  ]
})
export class ShareddModule { }
