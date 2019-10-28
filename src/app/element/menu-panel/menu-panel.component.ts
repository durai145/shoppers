import { ElementComponent } from './../element.component';
import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Link } from '../../link';
import { UtilsServiceService } from '../../utils-service.service';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.scss']
})


export class MenuPanelComponent extends ElementComponent implements OnInit, AfterViewInit {
  @Input() inputJson: string;
  @Input() brandName: string;
  menuItems: Array<Link>;
  constructor(private cdr: ChangeDetectorRef) {
    super();
   }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.menuItems = UtilsServiceService.jsonParse(this.inputJson);
    this.cdr.detectChanges();
  }


}
