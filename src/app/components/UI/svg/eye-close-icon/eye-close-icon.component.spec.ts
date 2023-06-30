import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeCloseIconComponent } from './eye-close-icon.component';

describe('EyeCloseIconComponent', () => {
  let component: EyeCloseIconComponent;
  let fixture: ComponentFixture<EyeCloseIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EyeCloseIconComponent]
    });
    fixture = TestBed.createComponent(EyeCloseIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
