import {Selector, t} from 'testcafe';

 class LoginPage{


    constructor() {
        this.loginName = Selector('input[id="username"]')
        this.password = Selector('input[id="password"]')
        this.loginButton = Selector('button[type="submit"]')
        this.cookiesAcceptButton = Selector('button[id="uc-btn-accept-banner"]')
    }

    async setUserName(userName){
        await t
            .typeText(this.loginName, userName)
    }
    //unused method 
    async handleCookiesModal(){
         await t
        .setNativeDialogHandler(() => true)
        .click('#uc-btn-accept-banner'); 
    }

    async setPassword(password){
        await t
            .typeText(this.password, password);
    }

    async clickOnLoginButton(){
        await t
            .click(this.loginButton);
    }

}
export default new LoginPage();