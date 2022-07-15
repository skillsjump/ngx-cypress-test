function selectGroupMenuItem(menuItem){
    cy.contains('a', menuItem).then( menu => {
        cy.wrap(menu).find('nb-icon').eq(1).invoke('attr', 'ng-reflect-icon').then( attr => {
            if(attr.includes('left')){
                cy.wrap(menu).click()
            }
        })
    })
}

class NavigationPage{

    formLayoutsPage(){
        selectGroupMenuItem('Form')
        cy.contains('Form Layouts').click()
    }

    datepickerPage(){
        selectGroupMenuItem('Form')
        cy.wait(1000)
        cy.contains('Datepicker').click()
    }

    smartTablePage(){
        selectGroupMenuItem('Tables & Data')
        cy.contains('Smart Table').click()
    }

}

export const navigateTo = new NavigationPage()