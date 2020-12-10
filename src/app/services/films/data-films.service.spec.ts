import { TestBed } from '@angular/core/testing';

import { DataFilmsService } from './data-films.service';

describe('DataFilmsService', () => {
  let service: DataFilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
