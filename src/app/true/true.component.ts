import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-true',
  templateUrl: './true.component.html',
  styleUrls: ['./true.component.css']
})
export class TrueComponent implements OnInit {

  name:string[] = ['reza','sara','ali','hossein']
  absent:boolean = true;
  score = 70;
  constructor() { }
 
  makeDisapper(){
    this.absent = !this.absent;
  }
  ngOnInit() {
  }

}
