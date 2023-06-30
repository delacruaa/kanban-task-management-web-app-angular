import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskModelComponent } from './view-task-model.component';

describe('ViewTaskModelComponent', () => {
  let component: ViewTaskModelComponent;
  let fixture: ComponentFixture<ViewTaskModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTaskModelComponent]
    });
    fixture = TestBed.createComponent(ViewTaskModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
