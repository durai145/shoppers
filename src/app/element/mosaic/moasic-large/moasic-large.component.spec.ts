import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoasicLargeComponent } from './moasic-large.component';

describe('MoasicLargeComponent', () => {
  let component: MoasicLargeComponent;
  let fixture: ComponentFixture<MoasicLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoasicLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoasicLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
