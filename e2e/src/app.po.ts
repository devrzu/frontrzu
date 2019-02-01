import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  //
  getTitleText() {
    return element(
      by.xpath('/html/body/app-root/div/div/app-header/div/div/div/a[1]')
    ).getText();
  }
}
