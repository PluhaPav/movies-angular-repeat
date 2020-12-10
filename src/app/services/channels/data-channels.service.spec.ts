import { TestBed } from '@angular/core/testing';

import { DataChannelsService } from './data-channels.service';

describe('DataChannelsService', () => {
  let service: DataChannelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataChannelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
