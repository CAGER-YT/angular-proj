import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentarrayComponent } from './studentarray.component';

describe('StudentarrayComponent', () => {
  let component: StudentarrayComponent;
  let fixture: ComponentFixture<StudentarrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentarrayComponent]
    });
    fixture = TestBed.createComponent(StudentarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
