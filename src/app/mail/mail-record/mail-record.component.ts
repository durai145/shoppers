import { MailInterface } from './../../mail-interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mail-record',
  templateUrl: './mail-record.component.html',
  styleUrls: ['./mail-record.component.scss']
})
export class MailRecordComponent implements OnInit {

  constructor() { }

  @Input() mail: MailInterface;
  ngOnInit() {
  }

}
