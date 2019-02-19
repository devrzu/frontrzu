import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { MenuComponent } from './layout/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { FeedComponent } from './feed/feed.component';

import { BaseService } from './services/base.service';
import { HttpService } from './services/http.service';
import { HelperService } from './services/helper.service';

import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { CustomErrorHandlerService } from './services/custom-error-handler.service';
import { ToastNotificationService } from './services/toast-notification.service';
import { PostComponent } from './feed/post/post.component';
import { CommentComponent } from './feed/post/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    FeedComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    FormsModule,
    SnotifyModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlimLoadingBarModule.forRoot()
    // RouterModule.forRoot(routes),
  ],
  providers: [
    BaseService,
    HttpService,
    SnotifyService,
    HelperService,
    CustomErrorHandlerService,
    ToastNotificationService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
