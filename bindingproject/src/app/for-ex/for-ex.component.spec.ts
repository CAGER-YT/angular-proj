import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForExComponent } from './for-ex.component';

describe('ForExComponent', () => {
  let component: ForExComponent;
  let fixture: ComponentFixture<ForExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForExComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
