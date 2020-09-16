import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    email:'',
    password:''
  } 

    constructor(private http: HttpClient) { }



  ngOnInit(): void {
  }


  signup() {
    alert('calling server' + JSON.stringify(this.user));
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    this.http.post('http://127.0.0.1:3000/signup', this.user, {
      headers: headers
    })
    .subscribe(data => {
      // alert(JSON.stringify(data))
      alert(JSON.stringify(data))
      //console.log(data.msg);
    });
  }

}


