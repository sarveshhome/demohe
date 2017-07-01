import { OnlineEquipmentPage } from './app.po';

describe('online-equipment App', () => {
  let page: OnlineEquipmentPage;

  beforeEach(() => {
    page = new OnlineEquipmentPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
