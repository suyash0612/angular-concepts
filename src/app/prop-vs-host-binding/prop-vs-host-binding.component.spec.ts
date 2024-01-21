import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropVsHostBindingComponent } from './prop-vs-host-binding.component';

describe('PropVsHostBindingComponent', () => {
  let component: PropVsHostBindingComponent;
  let fixture: ComponentFixture<PropVsHostBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropVsHostBindingComponent]
    });
    fixture = TestBed.createComponent(PropVsHostBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
