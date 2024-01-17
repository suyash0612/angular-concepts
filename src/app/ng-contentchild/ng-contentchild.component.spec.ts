import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentchildComponent } from './ng-contentchild.component';

describe('NgContentchildComponent', () => {
  let component: NgContentchildComponent;
  let fixture: ComponentFixture<NgContentchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgContentchildComponent]
    });
    fixture = TestBed.createComponent(NgContentchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
