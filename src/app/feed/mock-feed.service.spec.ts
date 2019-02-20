import { TestBed } from '@angular/core/testing';

import { FeedService } from './mock-feed.service';

describe('FeedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeedService = TestBed.get(FeedService);
    expect(service).toBeTruthy();
  });
});
