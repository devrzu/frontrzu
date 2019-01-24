import { Component, ViewChild } from '@angular/core';
import { FeedComponent } from './feed/feed.component';
import { MenuComponent } from './layout/menu.component';
import { FeedService } from './feed/feed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // directives: [FeedComponent, MenuComponent]
})
export class AppComponent {
  title = 'tossit';

  constructor(private feedService: FeedService) { }

  // @ViewChild(FeedComponent)
  //   private feedComponent: FeedComponent;

  tttt(event) {
    console.log('event : ' + event);
    this.feedService.changeKeyword(event);
    // this.feedComponent.getCommentList(event);
  }
}
