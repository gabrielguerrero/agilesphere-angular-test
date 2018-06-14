import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('angular-weather App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('check valid search shows results', async () => {
    expect(page);
    await page.navigateTo();
    await page.searchCity('Caracas');
    const headers = await page.getTableHeaders();
    expect(headers).toEqual(['City', '12 AM', '6 AM', '12 PM', '6 PM']);
    const data = await page.getTableData();
    expect(data).toEqual(['Caracas', '28.08 °', '25.92 °', '25.45 °', '26.36 °']);
  });

  it('checkl invalid search shows nothing', async () => {
    expect(page);
    await page.navigateTo();
    await page.searchCity('Caraasdsadcas');
    const headers = await page.getTableHeaders();
    expect(headers.length).toEqual(0);
    const data = await page.getTableData();
    expect(data.length).toEqual(0);
  });
});
