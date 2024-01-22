import { TestBed } from '@angular/core/testing';

import { ImBoredService } from './imbored.service';

describe('ImboredService', () => {
  let service: ImBoredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImBoredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
