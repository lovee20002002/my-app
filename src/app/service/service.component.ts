import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  message: string = "Hello world";
  constructor(private logginservice:LoggingService) { }

  ngOnInit() {
    this.logginservice.logMessage(this.message)
    // const logservice = new LoggingService();
    // logservice.logMessage(this.message);
    // console.log(this.message)

  }

}
