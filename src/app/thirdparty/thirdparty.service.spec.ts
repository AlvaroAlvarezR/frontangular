import { TestBed } from '@angular/core/testing';

import { ThirdpartyService } from './thirdparty.service';

describe('ThirdpartyService', () => {
  let service: ThirdpartyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThirdpartyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
