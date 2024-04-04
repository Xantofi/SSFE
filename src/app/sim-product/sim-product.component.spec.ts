import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimProductComponent } from './sim-product.component';

describe('SimProductComponent', () => {
  let component: SimProductComponent;
  let fixture: ComponentFixture<SimProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimProductComponent]
    });
    fixture = TestBed.createComponent(SimProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
