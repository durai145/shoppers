import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextElementComponent } from './input-text-element.component';

describe('InputTextElementComponent', () => {
  let component: InputTextElementComponent;
  let fixture: ComponentFixture<InputTextElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTextElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
