import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAboutUsComponent } from './more-about-us.component';

describe('MoreAboutUsComponent', () => {
  let component: MoreAboutUsComponent;
  let fixture: ComponentFixture<MoreAboutUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreAboutUsComponent]
    });
    fixture = TestBed.createComponent(MoreAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
