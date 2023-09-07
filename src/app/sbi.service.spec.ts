import { TestBed } from '@angular/core/testing';

import { SbiService } from './sbi.service';

describe('SbiService', () => {
  let service: SbiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SbiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
