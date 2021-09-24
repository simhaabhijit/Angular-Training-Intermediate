import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ThreeService } from 'src/app/bbb/three.service';
import { OneService } from 'src/app/one.service';
import { TwoService } from '../two.service';

@Component({
  selector: 'app-aaa-comp',
  templateUrl: './aaa-comp.component.html',
  styleUrls: ['./aaa-comp.component.scss']
})
export class AaaCompComponent implements OnInit {

  title = 'Template driven forms';
  // @ViewChild('contactForm') contactForm: NgForm;
  contact: any;
  countryList: any = [
    { id: 1, name: "India" },
    { id: '2', name: 'USA' },
    { id: '3', name: 'England' }
  ];
  firstname: any;
  ll: any;
  ss: any;
  constructor(private oneService: OneService,
    private twoService: TwoService,
    private threeService: ThreeService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.contact = {
      firstname: "",
      lastname: "",
      gender: "male",
      isToc: true,
      email: "",
    };
    console.log(this.oneService.one, this.twoService.two, this.threeService.three);



    this.getRepos().subscribe((respon: any) => {
      console.log(respon);
      this.ll = respon;
    },
      (error) => {                              //error() callback
        console.error('Request failed with error', error)

      }, () => {                                   //complete() callback
        console.error('Request completed')      //This is actually not needed 
      }
    );

    this.postRepos({"name":"morpheus","job":"leader"}).subscribe((respon: any) => {
      console.log(respon);
      this.ss = respon;
    },
      (error) => {                              //error() callback
        console.error('Request failed with error', error)

      }, () => {                                   //complete() callback
        console.error('Request completed')      //This is actually not needed 
      }
    );
  }


  onSubmit(contactForm: any) {
    console.log(contactForm.value);
  }


  getRepos(): Observable<any> {
    return this.http.get('https://animechan.vercel.app/api/quotes/character?name=naruto')
  }
  postRepos(reqObj:any): Observable<any> {
    // let :any;
    //  {"name":"morpheus","job":"leader"}

    return this.http.get('https://reqres.in/api/users', reqObj)
  }

  callServices() {
    console.log(this.oneService.one, this.twoService.two, this.threeService.three);
    this.oneService.one = 111;
    this.twoService.two = 111;
    this.threeService.three = 111;
    console.log(this.oneService.one, this.twoService.two, this.threeService.three);

  }


}
