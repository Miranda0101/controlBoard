import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneButtonComponent } from './one-button.component';

describe('OneButtonComponent', () => {
  let component: OneButtonComponent;
  let fixture: ComponentFixture<OneButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneButtonComponent]
    });
    fixture = TestBed.createComponent(OneButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
