import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollButtonComponent } from './scroll-button.component';

describe('ScrollButtonComponent', () => {
  let component: ScrollButtonComponent;
  let fixture: ComponentFixture<ScrollButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollButtonComponent]
    });
    fixture = TestBed.createComponent(ScrollButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
