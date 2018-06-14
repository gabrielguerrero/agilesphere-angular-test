import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  async searchCity(city: string) {
    await element(by.css('input.form-control')).sendKeys(city);
    await element(by.css('[data-test="searchButton"]')).click();
  }
  getTableHeaders() {
    return element.all(by.css('th')).getText();
  }
  getTableData() {
    return element.all(by.css('td')).getText();
  }
}
