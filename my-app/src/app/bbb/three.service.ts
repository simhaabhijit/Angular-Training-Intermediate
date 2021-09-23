import { Injectable } from '@angular/core';
import { BbbCompComponent } from './bbb-comp/bbb-comp.component';
import { BbbModule } from './bbb.module';

@Injectable(
  {
      providedIn: 'root'
      // providedIn: 'any'
    // providedIn: BbbModule
  }
)
export class ThreeService {

  three = 3;

  constructor() { }
}
