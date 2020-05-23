import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailRecordComponent } from './mail-record.component';

describe('MailRecordComponent', () => {
  let component: MailRecordComponent;
  let fixture: ComponentFixture<MailRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
