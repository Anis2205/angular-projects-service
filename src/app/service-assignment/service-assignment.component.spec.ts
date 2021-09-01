import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAssignmentComponent } from './service-assignment.component';

describe('ServiceAssignmentComponent', () => {
  let component: ServiceAssignmentComponent;
  let fixture: ComponentFixture<ServiceAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
