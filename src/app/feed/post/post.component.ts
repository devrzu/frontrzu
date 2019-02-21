import { Component, OnInit, Input } from '@angular/core';

const DEFAULT_COMMENT_DISPLAY_COUNT = 3;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post;
  private comments = [];
  private visibleAllComments = false;
  constructor() {}
  ngOnChanges() {
    console.log(`post-component ngOnChanges`);
  }

  // TODO(mock-data): Call comment data apart from post

  readMoreComments() {
    if (this.visibleAllComments) return;
    this.comments = this.post.comments;
    this.visibleAllComments = true;
  }

  lessComments() {
    // TODO(test): Input mock data in spec.ts
    if (this.post === undefined) return;
    if (this.post.comments.length >= DEFAULT_COMMENT_DISPLAY_COUNT) {
      this.visibleAllComments = false;
      this.comments = this.post.comments.slice(
        0,
        DEFAULT_COMMENT_DISPLAY_COUNT
      );
    } else {
      this.comments = this.post.comments;
    }
  }
  ngOnInit() {
    this.lessComments();
  }
}
