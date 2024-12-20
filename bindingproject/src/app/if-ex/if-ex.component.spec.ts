import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfExComponent } from './if-ex.component';

describe('IfExComponent', () => {
  let component: IfExComponent;
  let fixture: ComponentFixture<IfExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IfExComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IfExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
