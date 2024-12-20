import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayExComponent } from './two-way-ex.component';

describe('TwoWayExComponent', () => {
  let component: TwoWayExComponent;
  let fixture: ComponentFixture<TwoWayExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoWayExComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwoWayExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
