import { WelcomePage } from './welcome.po';
import { browser } from 'protractor';

describe('mean-frontend App', () => {
  let page: WelcomePage;

  beforeEach(() => {
    page = new WelcomePage();
  });

  //   it('should display welcome message', () => {
  //     page.navigateTo();
  //     expect(page.getParagraphText()).toEqual('Welcome to app!');
  //   });
  it('should enter allfields of ', () => {
    page.navigateTo();
    page.getFullNameField().sendKeys("Tek");
    page.getContactNoField().sendKeys("8956237410");
    page.getGender().sendKeys("Male");
    page.getEmailField().sendKeys("test@test.com");
    page.getAltNoField().sendKeys("7845129632");
    page.getDOBField().sendKeys("02/12/1993");
    page.getPreferredLoc().sendKeys("Bangalore");
    browser.waitForAngular();
    expect(page.getFullNameField().getText()).toEqual("Tek");
    //expect(page.getGender()).toEqual("Male")
  });
});
