const { expect } = require('chai');
const BrowserHelpers = require('e2e_training_wheels');
const browser = new BrowserHelpers();
 
describe('sample UI test', () => {
  before( async () => {
    await browser.init();
    await browser.visitPage('http://localhost:8080/');
  });
 
  beforeEach(async () => {
    await browser.page.reload();
  });
 
  after(async () => {
    await browser.close();
  });
 
  it('/* description inserted here */', async () => {
    //  Write tour scenario  
  });
});