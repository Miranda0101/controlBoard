import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EightButtonsComponent } from './eight-buttons.component';

describe('EightButtonsComponent', () => {
  let component: EightButtonsComponent;
  let fixture: ComponentFixture<EightButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EightButtonsComponent]
    });
    fixture = TestBed.createComponent(EightButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
