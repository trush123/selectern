import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlansComponent } from './plans/plans.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { ScheduleInterviewComponent } from './schedule-interview/schedule-interview.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PaymentComponent } from './payment/payment.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { ScheduledInterviewComponent } from './scheduled-interview/scheduled-interview.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { DetailsComponent } from './details/details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlansComponent,
    EnrollmentComponent,
    ScheduleInterviewComponent,
    LoginComponent,
    SignupComponent,
    PaymentComponent,
    FooterComponent,
    ScheduledInterviewComponent,
    AboutComponent,
    PricingComponent,
    DetailsComponent,
    DashboardComponent,
    VideoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
