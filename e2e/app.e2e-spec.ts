import { PizzastorePage } from './app.po';

describe('pizzastore App', () => {
  let page: PizzastorePage;

  beforeEach(() => {
    page = new PizzastorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
