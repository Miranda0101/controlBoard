import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourButtonsComponent } from './four-buttons.component';

describe('FourButtonsComponent', () => {
  let component: FourButtonsComponent;
  let fixture: ComponentFixture<FourButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FourButtonsComponent]
    });
    fixture = TestBed.createComponent(FourButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
