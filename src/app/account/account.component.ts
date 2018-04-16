import { Component, OnInit } from '@angular/core';
import { IUser } from '../user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  users:IUser[] = [
    {id:1 , name: 'reza'},
    {id:2 , name: 'ali'},
    {id:3 , name: 'sara'}
  ];
  constructor() { }

  ngOnInit() {
  }
  onClick(id:number){

  }

}
