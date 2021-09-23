import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TwoService } from 'src/app/aaa/two.service';
import { OneService } from 'src/app/one.service';
import { ThreeService } from '../three.service';

@Component({
  selector: 'app-bbb-comp',
  templateUrl: './bbb-comp.component.html',
  styleUrls: ['./bbb-comp.component.scss'],
  // providers: [ThreeService]
})
export class BbbCompComponent implements OnInit {

  constructor(private oneService: OneService, 
    private twoService: TwoService, 
    private threeService: ThreeService
    , private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.oneService.one, this.twoService.two, this.threeService.three);
    this.threeService.three = 5;
    console.log(this.oneService.one, this.twoService.two, this.threeService.three);

  }
  callServices() {
    console.log(this.oneService.one, this.twoService.two, this.threeService.three);
    this.oneService.one = 222;
    this.twoService.two = 222;
    this.threeService.three = 222;
    console.log(this.oneService.one, this.twoService.two, this.threeService.three);
    // this.router.navigate(['aaa','g']);
    // this.router.navigate(['aaa']);

  }
}
