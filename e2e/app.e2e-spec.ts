import { MarsProject5Page } from './app.po';

describe('mars-project-5 App', function() {
  let page: MarsProject5Page;

  beforeEach(() => {
    page = new MarsProject5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
