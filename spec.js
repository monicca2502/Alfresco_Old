var settingpage = require('./pageobjects/Settingpage');
var loginpage = require('./pageobjects/Loginpage');
var homepage = require('./pageobjects/Homepage');

describe('Duplicate Folder Validation',function(){
  it('should change provider and Apply',async function(){
    await settingpage.get();
    await settingpage.ECMSelect();
    loginpage = await settingpage.ClickApply();
  });
  it('should log in', async function(){  
    loginpage.setUsername("guest@example.com");
    loginpage.setPassword("Password");
    homepage = loginpage.ClickSignIn();
  });
  it('should check duplicate folder creation', async function(){
    homepage.ClickContenservices();
    homepage.ClickCreatefoldericon();
    homepage.EnterNametextbox("Monicca");
    homepage.ClickCreatebtn();
    homepage.EnterNametextbox("Monicca");
    homepage.ClickCreatebtn();
    expect(homepage.getValidationMessage().toEqual("There's already a folder with this name. Try a different name"));
    homepage.Threedots();
    homepage.ClickDeleteoption();    
  });
});