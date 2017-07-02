import { CesariosPage } from './app.po';

describe('cesarios App', () => {
  let page: CesariosPage;

  beforeEach(() => {
    page = new CesariosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
