import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  mail: Mail;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getPosts() {
this.http.get<Mail>('http://localhost:8081/mail/81f879de-fd7b-4c54-b7c1-aa37f8994d08/details').subscribe(data => this.mail = data);
   // alert(JSON.stringify(this.posts));

  }

}

interface Mail {
  uuid: string;
  body: string;

}
