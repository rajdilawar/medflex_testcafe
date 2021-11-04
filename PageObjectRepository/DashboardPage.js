import {Selector, t} from 'testcafe';

class DashboardPage{


    constructor() {
        this.userNameLoginUser = Selector('h3')
        this.closeInitialModal = Selector('.inline-flex.items-center.justify-center.overflow-hidden.leading-none.font-semibold.border.border-solid.focus\\:outline-none.select-none.text-gray-500.hover\\:text-gray-700.bg-transparent.hover\\:bg-gray-200.border-transparent.px-0.h-10.w-10.text-sm.rounded-full.block.mt-2.mr-2')
        this.kontakteLink = Selector('a[2]')
        this.navigateToHomePage = Selector('.h-10.flex.items-center.mb-2.text-black-800.group.hover\\:text-blue-500.border-l-4.border-gray-customGray.active.text-blue-600.border-blue-600.font-semibold')
        
    }

    async navigateToHomePage() {
        await t
            .click(this.navigateToHomePage);
    }

    async ClickToCloseInitialModal(){
        await t
            .click(this.closeInitialModal());
    }

    async navigateToAddressBook(){
        await t
            .click(this.kontakteLink());
    }
    async waitTestMethod() {
        await t 
        .wait(5000)
        }

}
export default new DashboardPage();