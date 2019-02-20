import { Component, OnInit, Input, OnDestroy } from '@angular/core';
// import { FeedService } from './feed.service';
import { FeedService } from './mock-feed.service';
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

  private keyword: string;
  private sub: any;
  private posts = [];

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
      .map(posts => {
        console.log('before : ' + this.posts);
        // posts.map(post => {
        //   if (post.comments.length > 2) {
        //     post.comments = [
        //       post.comments[0],
        //       post.comments[1],
        //       post.comments[2]
        //     ];
        //   }
        //   return post;
        // });
        this.posts = posts;
        console.log(posts);
      })
      .subscribe();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
