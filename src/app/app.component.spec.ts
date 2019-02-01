import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header.component';
import { MenuComponent } from './layout/menu.component';
import { FooterComponent } from './layout/footer.component';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HelperService } from './services';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        MenuComponent,
        FooterComponent,
        RouterOutlet
      ],
      providers: [HttpClient, HttpHandler, HelperService, SlimLoadingBarService]
      // imports: [RouterTestingModule]
    }).compileComponents();
  }));

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });
  //
  // it(`should have as title 'tossit'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('tossit');
  // });
  //
  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain(
  //     'Welcome to tossit!'
  //   );
  // });
});
