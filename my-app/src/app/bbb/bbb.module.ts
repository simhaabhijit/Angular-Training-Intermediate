import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BbbCompComponent } from './bbb-comp/bbb-comp.component';
import { ThreeService } from './three.service';
import { RouterModule } from '@angular/router';
import { AaaModule } from '../aaa/aaa.module';



@NgModule({
  declarations: [
    BbbCompComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: BbbCompComponent, pathMatch: 'full' }
    ]),
    // AaaModule
  ],
  exports: [
    // BbbCompComponent
  ],
  // providers: [
  //   ThreeService
  // ]
})
export class BbbModule { }
