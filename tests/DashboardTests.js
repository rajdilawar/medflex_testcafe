import {ClientFunction} from "testcafe";
import DashboardPage from "../PageObjectRepository/DashboardPage";
import LoginPage from "../PageObjectRepository/LoginPage";
import {dataSet} from '../Data/data';
import {Selector, t} from 'testcafe';



const dashboardUrl = 'https://app.medflex.de/arzt/'
const loginUrl = 'https://app.medflex.de/arzt/'


const getUrl = ClientFunction(() => window.location.href);

fixture('Dashboard Page')
    .page("about:blank")
    .beforeEach(async t =>{
        await t

            .setNativeDialogHandler(() => true)
            .navigateTo("https://app.medflex.de/arzt")
            .click("#uc-btn-accept-banner", {});
            await LoginPage.setUserName(dataSet.userName);
            await LoginPage.setPassword(dataSet.password);
            await LoginPage.clickOnLoginButton();
            await DashboardPage.navigateToHomePage();
            await DashboardPage.ClickToCloseInitialModal();
    });

test('Loading Dashboard Page', async t => {
    await t
        .expect(getUrl()).contains(dashboardUrl)
        await t.expect(DashboardPage.userNameLoginUser.innerText).contains('Hallo Rajdilawar Singh Chandehok');
});



