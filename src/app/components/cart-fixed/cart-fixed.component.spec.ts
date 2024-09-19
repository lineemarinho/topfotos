import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartFixedComponent } from './cart-fixed.component';

describe('CartFixedComponent', () => {
  let component: CartFixedComponent;
  let fixture: ComponentFixture<CartFixedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartFixedComponent]
    });
    fixture = TestBed.createComponent(CartFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
