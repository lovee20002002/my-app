import { Component, OnInit, ViewChild, ElementRef, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit } from '@angular/core';
import { Icomment } from '../Icomment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked,AfterViewInit {

  comments: Icomment[] = [];
  @ViewChild('commenttext') comm: ElementRef;
  constructor() {
  }

  ngOnInit() {
    console.log("ngOnInt call");
    console.log("textArreya: " + this.comm.nativeElement.value );
    


  }
  ngDoCheck() {
    console.log("ngDOChek call");


  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChekd call");
  }
  ngAfterContentInit(): void {
    console.log("ngAftercontentInt call");

  }
  
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked call");

    
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit call");

  }
  addcomment() {
    let c: Icomment = {
      comment: this.comm.nativeElement.value, dislike: 0, like: 0, numberOfReviwe: 0, star: 0
    }
    this.comments.push(c);
  }
  reviwescont(c: Icomment, n: HTMLInputElement) {
    c.numberOfReviwe++;
    c.star += parseInt(n.value);
  }

  commentlike(c: Icomment) {
    c.like++;
  }
  commentdislike(c: Icomment) {
    c.dislike++;
  }
}
