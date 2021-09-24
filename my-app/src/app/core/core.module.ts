import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    BaseComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
