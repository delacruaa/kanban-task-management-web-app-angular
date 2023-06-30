import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardIconComponent } from './board-icon.component';

describe('BoardIconComponent', () => {
  let component: BoardIconComponent;
  let fixture: ComponentFixture<BoardIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardIconComponent]
    });
    fixture = TestBed.createComponent(BoardIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
