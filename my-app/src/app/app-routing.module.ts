import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AaaCompComponent } from './aaa/aaa-comp/aaa-comp.component';
import { PcompComponent } from './pcomp/pcomp.component';

const routes: Routes = [
  { path: 'home', component: PcompComponent },
  { path: 'bbb', loadChildren: () => import('./bbb/bbb.module').then(m => m.BbbModule) },
  // { path: 'aaa', 
  // component: AaaCompComponent},
  //loadChildren: () => import('./aaa/aaa.module').then(m => m.AaaModule) },

  { path: '', redirectTo: 'home' , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
