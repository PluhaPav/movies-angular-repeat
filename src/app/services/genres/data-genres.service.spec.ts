import { TestBed } from '@angular/core/testing';

import { DataGenresService } from './data-genres.service';

describe('DataGenresService', () => {
  let service: DataGenresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataGenresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
