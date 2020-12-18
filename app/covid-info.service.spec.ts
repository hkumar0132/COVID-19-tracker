import { TestBed } from '@angular/core/testing';

import { CovidInfoService } from './covid-info.service';

describe('CovidInfoService', () => {
  let service: CovidInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
