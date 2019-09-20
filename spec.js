var settingpage = require('./pageobjects/Settingpage');
var loginpage = require('./pageobjects/Loginpage');
var homepage = require('./pageobjects/Homepage');

describe('Duplicate Folder Validation',function(){
  it('should change provider and Apply',async function(){
    await settingpage.getandapply();
      expect(browser.getCurrentUrl()).toEqual('http://qaexercise.envalfresco.com/login');
  });

  it('should login with valid credentials', async function(){  
    await settingpage.getandapply();
    await loginpage.setUsername("guest@example.com");
    await loginpage.setPassword("Password");
    await loginpage.ClickSignIn();
    expect(browser.getCurrentUrl()).toEqual('http://qaexercise.envalfresco.com/home');
  });

  it('should create new folder', async function(){
    await settingpage.getandapply();
    await loginpage.setUsername("guest@example.com");
    await loginpage.setPassword("Password");
    await loginpage.ClickSignIn();
    homepage.createfolder("Alfresco");
    ((homepage.checkfolder()).then(function (items) {
    expect(items).isPresent().toBeTruthy();
    homepage.deletefolder();
    }));

  });

  it('should check duplicate folder creation', async function(){
    await settingpage.getandapply();
    await loginpage.setUsername("guest@example.com");
    await loginpage.setPassword("Password");
    await loginpage.ClickSignIn();
    homepage.createfolder("Alfresco");
        homepage.duplicatefoldercreation("Alfresco");
        browser.sleep(1000);
        expect(homepage.newfolderdialogboxPresent()).toBe(true);
        homepage.deletefolder();
  });
});