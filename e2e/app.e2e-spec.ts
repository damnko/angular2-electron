import { A037ElectronPage } from './app.po';

describe('a037-electron App', () => {
  let page: A037ElectronPage;

  beforeEach(() => {
    page = new A037ElectronPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
