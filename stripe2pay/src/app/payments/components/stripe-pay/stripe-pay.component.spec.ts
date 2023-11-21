import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripePayComponent } from './stripe-pay.component';

describe('StripePayComponent', () => {
  let component: StripePayComponent;
  let fixture: ComponentFixture<StripePayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StripePayComponent]
    });
    fixture = TestBed.createComponent(StripePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
