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
    expect(headers[0]).toEqual('City');
    expect(headers.length).toEqual(5);
    // @ts-ignore
    headers.slice(1).forEach(i => expect(i).toMatch(/\d+\s\w{2}/));

    const data = await page.getTableData();
    expect(data[0]).toEqual('Caracas');
    expect(data.length).toEqual(5);
    // @ts-ignore
    data.slice(1).forEach(i => expect(i).toMatch(/\d+\s°/));
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
