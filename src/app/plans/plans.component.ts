import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../services/enrollment.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css'],
  providers:[EnrollmentService]
})
export class PlansComponent implements OnInit {

  constructor(private enrollService : EnrollmentService) { }

  ngOnInit(): void {
  }

  selectPlan(){
    this.enrollService.enrollForPlan().subscribe((resp)=>{
      alert(resp.json())
      console.log(resp);
    })
    debugger;
    // routerLink ="/payment"
    
  }

}
