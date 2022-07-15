import { navigateTo } from "../support/page-objects/navigationPage"
import { onTheSmartTablePage } from "../support/page-objects/smartTablePage"


describe('new tests', () => {

    beforeEach('open application', () => {
        cy.loginToApplication()
    })

    it('navigation tests', () => {
        navigateTo.datepickerPage()
        navigateTo.formLayoutsPage()
        navigateTo.smartTablePage()
        onTheSmartTablePage.updateAndValidateAgeByFirstName('Larry', '50')
        onTheSmartTablePage.updateAndValidateAgeByFirstName('Ann', '80')
        navigateTo.formLayoutsPage()
        // onTheSmartTablePage.filloutFirstName()
        // onTheSmartTablePage.filloutLastName()

    })

})