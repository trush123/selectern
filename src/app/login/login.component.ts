import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email:'',
    password:''
  }

  constructor(private http: HttpClient, private router: Router ) { }
  checkedLogin = true;
  checkedSignup = false;
  ngOnInit(): void {
 //   alert(this.router.url);
    if(this.router.url == '/login'){
      this.checkedLogin = true;
      this.checkedSignup = false
    }
    if(this.router.url == '/signup'){
      this.checkedLogin = false;
      this.checkedSignup = true;
    }
   
  }

  login() {
    alert('calling server' + JSON.stringify(this.user));
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');

    this.http.post('http://127.0.0.1:3000/login', this.user, {
      headers: headers
    })
    .subscribe(data => {
      // alert(JSON.stringify(data))
      alert(JSON.stringify(data))
      //console.log(data.msg);
    });
  }

  signup(){
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
