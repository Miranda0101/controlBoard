import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightnessComponent } from './lightness.component';

describe('LightnessComponent', () => {
  let component: LightnessComponent;
  let fixture: ComponentFixture<LightnessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LightnessComponent]
    });
    fixture = TestBed.createComponent(LightnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
