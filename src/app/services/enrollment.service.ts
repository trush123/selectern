import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class EnrollmentService{
    url = 'http://localhost:3000/selectedPlan';

    constructor(private http:HttpClient){}
    enrollForPlan() : Observable<any>{
       return this.http.get(this.url)

    }
}