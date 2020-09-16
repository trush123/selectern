import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ComponentRef, ViewChild } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'app-schedule-interview',
  templateUrl: './schedule-interview.component.html',
  styleUrls: ['./schedule-interview.component.css']
})
export class ScheduleInterviewComponent implements OnInit {

 

  // @ViewChild('appenHere', {static : false, read : ViewContainerRef}) target: ViewContainerRef;
  // private componentRef: ComponentRef<ScheduleInterviewComponent>;
  // scheduler : ScheduleInterviewComponent[] ;

  constructor(private route:Router) { }
  

  ngOnInit(): void {
  }

  // addNewComponent() {
  //   let childComponent = this.resolver.resolveComponentFactory(ScheduleInterviewComponent);
  //   this.componentRef = this.target.createComponent(childComponent);
  //   // this.scheduler.push(childComponent);
  // }

  submitData(){
    alert('Your interview is scheduled, You will be notified on mail with date confirmation, All the Best!!')
      // this.route.navigate(["/home"])
      this.route.navigateByUrl('/home');
  }

}
