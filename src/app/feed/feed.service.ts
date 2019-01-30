import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';

import { appApiResources } from '../app.constants';
import { ServerResponse } from '../interface/server-response.interface';
import { HelperService } from '../services/helper.service';
import { BaseService } from '../services/base.service';

import { BehaviorSubject } from 'rxjs';

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
    // const params = new HttpParams().set('page', page);
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    // curl -XPOST -H 'Content-Type: application/json' http://35.236.172.109:9200/comments/finder/_search?pretty=true -d '{
    //     "query" : {
    //         "match" : { "contents" : "ㅊ" }
    //     }
    // }'
    const query = { query: { match: { contents: contents } } };
    return this.http
      .post(appApiResources.comments, query, { headers: headers })
      .map((res: any) => {
        return res.hits.hits.map(comment => {
          return comment._source.contents;
        });
        // return res;
      })
      .catch((error: Response) => Observable.throw(error))
      .finally(() => {});
  }
  // getCommentDetail(id): Observable<any> {
  //   return this.http.get(`${appApiResources.block}/${id}`)
  //     .map((res: ServerResponse) => {
  //       return res;
  //     })
  //     .catch((error: Response) => Observable.throw(error))
  //     .finally(() => {
  //     });
  // }
}

@Injectable()
export class BlockService {}
