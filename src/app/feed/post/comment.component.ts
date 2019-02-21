import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment;
  constructor() {}

  ngOnInit() {
    console.log(
      `CommentComponent onInit[${this.comment ? this.comment._id.$oid : ''}]`
    );
  }
  ngOnChanges() {
    console.log(
      `CommentComponent ngOnChanges[${
        this.comment ? this.comment._id.$oid : ''
      }]`
    );
  }
}
