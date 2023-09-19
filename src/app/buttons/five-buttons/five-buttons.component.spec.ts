import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveButtonsComponent } from './five-buttons.component';

describe('FiveButtonsComponent', () => {
  let component: FiveButtonsComponent;
  let fixture: ComponentFixture<FiveButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiveButtonsComponent]
    });
    fixture = TestBed.createComponent(FiveButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
