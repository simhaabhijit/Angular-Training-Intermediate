import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AaaCompComponent } from './aaa-comp/aaa-comp.component';
// import { BbbModule } from '../bbb/bbb.module';
import { TwoService } from './two.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AaaCompComponent
  ],
  imports: [
    CommonModule,
    // RouterModule.forChild([
    //   {
    //     path: 'g', children:
    //       [{ path: '', component: AaaCompComponent, pathMatch: 'full' }]
    //   }
    // ]),
    // BbbModule
  ],
  exports: [
    AaaCompComponent
  ],
  providers: [
    TwoService
  ]
})
export class AaaModule { }
