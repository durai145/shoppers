import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputListElementComponent } from './input-list-element.component';

describe('InputListElementComponent', () => {
  let component: InputListElementComponent;
  let fixture: ComponentFixture<InputListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
