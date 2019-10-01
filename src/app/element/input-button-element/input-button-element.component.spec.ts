import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputButtonElementComponent } from './input-button-element.component';

describe('InputButtonElementComponent', () => {
  let component: InputButtonElementComponent;
  let fixture: ComponentFixture<InputButtonElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputButtonElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputButtonElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
