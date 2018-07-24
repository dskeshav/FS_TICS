import { browser, by, element } from 'protractor';

export class WelcomePage {
  navigateTo() {
    return browser.get('/welcome-candid/:id');
  }
  getFullNameField() {
    return element(by.id('usr'));
  }
  getContactNoField(){
      return element(by.id('contact'));
  }
  getExperienceField(){
      return element(by.id('exp'));
  }
  getGender(){
      return element(by.model('selectedGender'));
  }
  getEmailField(){
      return element(by.id('email'));
  }
  getAltNoField(){
      return element(by.id('alt'));
  }
  getDOBField(){
      return element(by.id('dob'));
  }

  getPreferredLoc(){
      return element(by.id('selectLocation'))
  }
  getProceed(){
      return element(by.buttonText('Proceed'))
  }
}
