import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingDemoComponent } from './binding-demo.component';

describe('BindingDemoComponent', () => {
  let component: BindingDemoComponent;
  let fixture: ComponentFixture<BindingDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingDemoComponent]
    });
    fixture = TestBed.createComponent(BindingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
