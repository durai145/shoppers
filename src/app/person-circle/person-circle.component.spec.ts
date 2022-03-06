import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCircleComponent } from './person-circle.component';

describe('PersonCircleComponent', () => {
  let component: PersonCircleComponent;
  let fixture: ComponentFixture<PersonCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
