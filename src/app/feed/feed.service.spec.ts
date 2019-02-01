import { TestBed } from '@angular/core/testing';
import { FeedService } from './feed.service';
import { HttpClientModule } from '@angular/common/http';
import { HelperService } from '../services';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

describe('FeedService', () => {
  beforeEach(() => {
    return TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HelperService, SlimLoadingBarService]
    });
  });

  it('should be created', () => {
    const service: FeedService = TestBed.get(FeedService);
    expect(service).toBeTruthy();
  });
});
