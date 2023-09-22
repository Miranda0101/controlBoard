/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InteractService } from './interact.service';

describe('Service: Interact', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InteractService]
    });
  });

  it('should ...', inject([InteractService], (service: InteractService) => {
    expect(service).toBeTruthy();
  }));
});
