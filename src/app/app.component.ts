import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'selecturn';
  isSchedule:boolean=false

  constructor(private route:Router){}

  OnscheduleInterview(){
    // this.route.navigate(["/schedule-interview"]);
    this.route.navigateByUrl('/schedule-interview');
    this.isSchedule =true;
  }

  //routerLink =
}
