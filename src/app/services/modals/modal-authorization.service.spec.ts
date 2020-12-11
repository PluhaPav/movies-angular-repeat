import { TestBed } from '@angular/core/testing';

import { ModalAuthorizationService } from './modal-authorization.service';

describe('ModalAuthorizationService', () => {
  let service: ModalAuthorizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalAuthorizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
