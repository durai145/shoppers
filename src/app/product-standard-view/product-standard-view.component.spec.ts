import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductStandardViewComponent } from './product-standard-view.component';

describe('ProductStandardViewComponent', () => {
  let component: ProductStandardViewComponent;
  let fixture: ComponentFixture<ProductStandardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductStandardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductStandardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
