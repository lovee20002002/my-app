import { Injectable,EventEmitter } from '@angular/core';
import { IAccount } from './account';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountsService {
  accounts:IAccount[] = [
    {
      name :'reza',pasword:'123'
    },
    { name:'sara', pasword:'987'}
  ];
  
  constructor(private logginservice : LoggingService) { }
  
  addAccount(a:IAccount){
    this.accounts.push(a);
    this.logginservice.logMessage(a.toString());
  }
}
