import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

import { appApiResources } from '../app.constants';
import { HelperService } from '../services/helper.service';

import { BehaviorSubject, of } from 'rxjs';
import * as feedData from './mock-feed.data.json';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  constructor(
    protected http: HttpClient,
    public helperService: HelperService
  ) {}

  private keywordSource = new BehaviorSubject('default message');
  keywordMessage = this.keywordSource.asObservable();

  changeKeyword(message: string) {
    console.log('changeKeyword : ' + message);
    this.keywordSource.next(message);
  }

  getCommentList(contents = '와드'): Observable<any> {
    return of(feedData.articles);
  }
}

@Injectable()
export class BlockService {}
