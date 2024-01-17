import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNameComponent } from './ng-name.component';

describe('NgNameComponent', () => {
  let component: NgNameComponent;
  let fixture: ComponentFixture<NgNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgNameComponent]
    });
    fixture = TestBed.createComponent(NgNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
