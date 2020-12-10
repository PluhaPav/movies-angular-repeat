import { TestBed } from '@angular/core/testing';

import { DataCommentsService } from './data-comments.service';

describe('DataCommentsService', () => {
  let service: DataCommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
