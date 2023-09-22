/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnityComponent } from './unity.component';

describe('UnityComponent', () => {
  let component: UnityComponent;
  let fixture: ComponentFixture<UnityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});