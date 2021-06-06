import { TestBed } from '@angular/core/testing';

import { GrowthreportService } from './growthreport.service';

describe('GrowthreportService', () => {
  let service: GrowthreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrowthreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
