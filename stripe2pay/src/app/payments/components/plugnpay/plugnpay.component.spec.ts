import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlugnpayComponent } from './plugnpay.component';

describe('PlugnpayComponent', () => {
  let component: PlugnpayComponent;
  let fixture: ComponentFixture<PlugnpayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlugnpayComponent]
    });
    fixture = TestBed.createComponent(PlugnpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
