import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAmountElementComponent } from './input-amount-element.component';

describe('InputAmountElementComponent', () => {
  let component: InputAmountElementComponent;
  let fixture: ComponentFixture<InputAmountElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAmountElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAmountElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
