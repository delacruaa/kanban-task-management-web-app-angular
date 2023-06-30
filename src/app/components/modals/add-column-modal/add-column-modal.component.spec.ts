import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddColumnModalComponent } from './add-column-modal.component';

describe('AddColumnModalComponent', () => {
  let component: AddColumnModalComponent;
  let fixture: ComponentFixture<AddColumnModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddColumnModalComponent]
    });
    fixture = TestBed.createComponent(AddColumnModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
