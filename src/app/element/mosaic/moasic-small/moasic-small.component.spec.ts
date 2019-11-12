import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoasicSmallComponent } from './moasic-small.component';

describe('MoasicSmallComponent', () => {
  let component: MoasicSmallComponent;
  let fixture: ComponentFixture<MoasicSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoasicSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoasicSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
