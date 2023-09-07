import { TestBed } from '@angular/core/testing';

import { IciciService } from './icici.service';

describe('IciciService', () => {
  let service: IciciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IciciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
