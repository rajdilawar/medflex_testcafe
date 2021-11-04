import {ClientFunction} from "testcafe";
import LoginPage from "../PageObjectRepository/LoginPage";
import DashboardPage from "../PageObjectRepository/DashboardPage";
import {dataSet} from '../Data/data';

const url = 'https://app.medflex.de/arzt'
const getUrl = ClientFunction(() => window.location.href);

fixture('Login Page')
    .page("about:blank");



    test("FORM - Successfully Login", async (t) => {
        await t
        .setNativeDialogHandler(() => true)
        .navigateTo("https://app.medflex.de/arzt")
        .click("#uc-btn-accept-banner", {});
        await LoginPage.setUserName(dataSet.userName);
        await LoginPage.setPassword(dataSet.password);
        await LoginPage.clickOnLoginButton();
       // await t.expect(DashboardPage.userNameLoginUser.innerText).contains('Hallo Rajdilawar Singh Chandehok');

    });
 