import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextPasswordElementComponent } from './input-text-password-element.component';

describe('InputTextPasswordElementComponent', () => {
  let component: InputTextPasswordElementComponent;
  let fixture: ComponentFixture<InputTextPasswordElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTextPasswordElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextPasswordElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
