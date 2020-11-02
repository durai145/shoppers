import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MailInterface } from '../mail-interface';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  mail: MailInterface;
  mails: MailInterface[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getPosts() {
    alert('001');
    this.http.get<MailInterface>('http://localhost:8081/mail/81f879de-fd7b-4c54-b7c1-aa37f8994d08/details').subscribe(data => this.mail = data);
    // alert(JSON.stringify(this.posts));

  }

  getMails() {
    this.http.get<MailInterface[]>('http://localhost:8081/mail/').subscribe(data => this.mails = data);
  }

  onSelect(mail) {
    this.mail = mail;
  }
}
