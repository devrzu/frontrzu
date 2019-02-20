import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { of } from 'rxjs';
import * as feedData from './mock-feed.data.json';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  getCommentList(contents = '와드'): Observable<any> {
    return of(feedData.articles);
  }
}

@Injectable()
export class BlockService {}
