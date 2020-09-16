import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../services/enrollment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[EnrollmentService]
})
export class DashboardComponent implements OnInit {

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

