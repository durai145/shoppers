import { MailInterface } from './../../mail-interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mail-details',
  templateUrl: './mail-details.component.html',
  styleUrls: ['./mail-details.component.scss']
})
export class MailDetailsComponent implements OnInit {

  constructor() { }

  @Input() mail: MailInterface;
  ngOnInit() {
  }

}
