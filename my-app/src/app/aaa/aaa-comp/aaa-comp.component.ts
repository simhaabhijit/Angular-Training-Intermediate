import { Component, OnInit } from '@angular/core';
import { ThreeService } from 'src/app/bbb/three.service';
import { OneService } from 'src/app/one.service';
import { TwoService } from '../two.service';

@Component({
  selector: 'app-aaa-comp',
  templateUrl: './aaa-comp.component.html',
  styleUrls: ['./aaa-comp.component.scss']
})
export class AaaCompComponent implements OnInit {

  constructor(private oneService: OneService, 
    private twoService: TwoService, 
    private threeService: ThreeService
    ) { }

  ngOnInit(): void {
    console.log(this.oneService.one, this.twoService.two, this.threeService.three);
  }

  callServices() {
    console.log(this.oneService.one, this.twoService.two, this.threeService.three);
    this.oneService.one = 111;
    this.twoService.two = 111;
    this.threeService.three = 111;
    console.log(this.oneService.one, this.twoService.two, this.threeService.three);

  }
}
