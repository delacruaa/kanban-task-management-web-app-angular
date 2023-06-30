import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBoardModalComponent } from './create-board-modal.component';

describe('CreateBoardModalComponent', () => {
  let component: CreateBoardModalComponent;
  let fixture: ComponentFixture<CreateBoardModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBoardModalComponent]
    });
    fixture = TestBed.createComponent(CreateBoardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
