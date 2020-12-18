import { TestBed } from '@angular/core/testing';

import { CountryNameResolverService } from './country-name-resolver.service';

describe('CountryNameResolverService', () => {
  let service: CountryNameResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryNameResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
