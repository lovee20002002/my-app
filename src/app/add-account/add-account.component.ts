import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { IAccount } from '../account';
import { emit } from 'cluster';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  account: IAccount[] = [];
  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;

  constructor(private accountservice: AccountsService) { }
  ngOnInit() {
    this.account = this.accountservice.accounts;
  }
  addNewAccount() {
    let a:IAccount = {name: this.username.nativeElement.value , pasword: this.password.nativeElement.value};
    this.accountservice.addAccount(a);
  }

}
