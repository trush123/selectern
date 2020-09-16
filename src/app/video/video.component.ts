import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @ViewChild('cardBody', { static: true, read: ElementRef }) cardBody: ElementRef;
  data;
  //@ViewChild('myid',  {static: false}) myVar:ElementRef;
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    // alert();
    //this.videocall()

  }



  ngOnInit(): void {
    this.cardBody.nativeElement.innerHTML = "<h1>this is arandom</h1>";
    this.videocall();
  }

  videocall() {
    //   alert('calling server');
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'text/html')
      .set('Access-Control-Allow-Origin', '*');;

    const httpOptionsPlain = {
      headers: new HttpHeaders({
        'Accept': 'text/plain',
        'Content-Type': 'text/plain'
      }),
      'responseType': 'h'
    };

    this.http.get('http://localhost:3000/', { responseType: 'text' })
      .subscribe((data: any) => {

        //alert(JSON.stringify(data))
        console.log(JSON.parse(data))
        var a = JSON.parse(data)
        // data =  JSON.parse(data);
        // alert(typeof(data));
        // this.data = this.sanitizer.bypassSecurityTrustHtml(data.html);  
        // alert(typeof(this.data));
        // alert(JSON.stringify(data.html));
        // this.data = data.html;
        this.cardBody.nativeElement.innerText = a.html//data.html;
      });

  } user(user: any) {
    throw new Error("Method not implemented.");
  }


  

}