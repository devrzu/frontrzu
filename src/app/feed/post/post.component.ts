import { Component, OnInit, Input } from '@angular/core';

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

  test() {
    this.post.comments = [this.post.comments[1]];
    console.log(this.post.title);
    this.post = {};
  }

  readMoreComments() {
    if (this.visibleAllComments) return;
    this.comments = this.post.comments;
    this.visibleAllComments = true;
  }

  ngOnInit() {
    if (this.post.comments.length > 2) {
      this.visibleAllComments = false;
      this.comments = [
        this.post.comments[0],
        this.post.comments[1],
        this.post.comments[2]
      ];
    } else {
      this.comments = this.post.comments;
    }
  }
}
