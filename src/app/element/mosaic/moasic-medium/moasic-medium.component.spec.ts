import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoasicMediumComponent } from './moasic-medium.component';

describe('MoasicMediumComponent', () => {
  let component: MoasicMediumComponent;
  let fixture: ComponentFixture<MoasicMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoasicMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoasicMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
