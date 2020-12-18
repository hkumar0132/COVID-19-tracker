import { TestBed } from '@angular/core/testing';

import { CountrywiseResolverService } from './countrywise-resolver.service';

describe('CountrywiseResolverService', () => {
  let service: CountrywiseResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountrywiseResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
