import { TestBed } from '@angular/core/testing';

import { TaylorerasService } from './tayloreras.service';

describe('TaylorerasService', () => {
  let service: TaylorerasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaylorerasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
