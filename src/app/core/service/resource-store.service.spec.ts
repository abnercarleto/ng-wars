import { TestBed } from '@angular/core/testing';

import { ResourceStoreService } from './resource-store.service';

describe('ResourceStoreService', () => {
  let service: ResourceStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourceStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
