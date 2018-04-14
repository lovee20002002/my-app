import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  @Input() rating: number;
  width;
  constructor(private reouter:Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.reouter.navigate(['/addaccunt']);
    }, 5000);
  }
  ngOnChanges(changes : SimpleChanges): void {
    this.width = this.rating * 96 / 5 ;
    console.log(changes);
    
    
  }

}
