import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AaaModule } from './aaa/aaa.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BbbModule } from './bbb/bbb.module';
import { PcompComponent } from './pcomp/pcomp.component';
import { ProductGuardService } from './product-guard-service.service';

@NgModule({
  declarations: [
    AppComponent,
    PcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CoreModule,
    AaaModule,
    // BbbModule
  ],
  providers: [ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
