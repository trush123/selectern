import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlansComponent } from './plans/plans.component';
import {  HomeComponent} from './home/home.component';
import {EnrollmentComponent} from './enrollment/enrollment.component'
import { LoginComponent } from './login/login.component';
import { ScheduleInterviewComponent } from './schedule-interview/schedule-interview.component';
import { PaymentComponent } from './payment/payment.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {path:'tvideo' , component: VideoComponent},
  {path:'plans' , component: PlansComponent},
  {path:'enroll' , component: EnrollmentComponent},
  {path:'login' , component: LoginComponent},
  {path:"schedule-interview", component:ScheduleInterviewComponent},
  {path:'home' , component: HomeComponent},
  {path:'signup' ,  component: LoginComponent},
  {path:'aboutus' ,  component: AboutComponent},
  {path:'dashboard' ,  component: DashboardComponent},
  {path:'payment' , component: PaymentComponent},
  
  {path:'' , component: HomeComponent},
  {path:'*' , component: HomeComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
