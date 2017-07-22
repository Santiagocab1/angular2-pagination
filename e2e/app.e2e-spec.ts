import { DatatablePage } from './app.po';

describe('datatable App', () => {
  let page: DatatablePage;

  beforeEach(() => {
    page = new DatatablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
