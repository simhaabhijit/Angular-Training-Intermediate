import { Injectable } from '@angular/core';
import { AaaModule } from './aaa.module';

@Injectable(
  // {
  // providedIn: 'root'
  
    // providedIn: AaaModule
// }
)
export class TwoService {

  two = 2;

  constructor() { }
}
