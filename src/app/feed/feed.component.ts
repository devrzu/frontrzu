import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FeedService } from './feed.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [FeedService]
})
export class FeedComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private feedService: FeedService
  ) {}

  private comments = [];
  private keyword: string;
  private sub: any;

  ngOnInit() {
    console.log(1);
    this.getCommentList('와드');
    console.log(2);
    // setInterval(() => {
    //     console.log('counter ! : ' + this.comments + ' ' + this.keyword);
    // }, 1000);

    // this.feedService.keywordMessage.subscribe(keyword => this.getCommentList(keyword));

    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //   this.getCommentList((params.get('keyword')))
    //   )
    // );
    this.sub = this.route.params.subscribe(params => {
      console.log(params['keyword']);
      this.getCommentList(params['keyword']);
    });
  }

  getCommentList(keyword) {
    console.log('keyword :' + keyword);
    this.feedService
      .getCommentList(keyword)
      .map(comments => {
        console.log('before : ' + this.comments);
        this.comments = comments;
        console.log(comments);
        // a.hits.hits.map(comment => {
        //   console.log(comment._source.contents);
        // });
      })
      .subscribe();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
