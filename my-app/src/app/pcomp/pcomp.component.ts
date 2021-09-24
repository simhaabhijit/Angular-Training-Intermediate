import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TwoService } from '../aaa/two.service';
import { ThreeService } from '../bbb/three.service';
import { OneService } from '../one.service';

@Component({
  selector: 'app-pcomp',
  templateUrl: './pcomp.component.html',
  styleUrls: ['./pcomp.component.scss']
})
export class PcompComponent implements OnInit {

  constructor(private oneService: OneService, 
    private twoService: TwoService, 
    private threeService: ThreeService,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.oneService.one,
       this.twoService.two, 
      this.threeService.three);

  }

  callServices() {
    // console.log(this.oneService.one, 
    //   this.twoService.two, 
    //   this.threeService.three);
    // this.oneService.one = 0;
    // this.twoService.two = 0;
    // this.threeService.three = 0;
    // console.log(this.oneService.one,
    //    this.twoService.two,
    //     this.threeService.three);
    this.router.navigate(['aaa']);
  }

}
