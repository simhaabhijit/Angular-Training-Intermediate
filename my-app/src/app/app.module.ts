import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AaaModule } from './aaa/aaa.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BbbModule } from './bbb/bbb.module';
import { PcompComponent } from './pcomp/pcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    PcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AaaModule,
    // BbbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
