/// <reference types="cypress" />

describe('First test suite', () => {

    beforeEach('open application', () => {
        cy.visit('/')
    })

    it('first test', () => {
        cy.get('nb-user').should('contain', 'Nick Jones')
    })

    it.only('Types of locators', () => {
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //by Tag Name
        cy.get('input')

        //by ID
        cy.get('#inputEmail1')

        //by Class value
        cy.get('.input-full-width')

        //by Attribute
        cy.get('[placeholder]')

        //by Attribute and value
        cy.get('[placeholder="Email"]')

        //by two differentet attributes
        cy.get('[placeholder="Email"][type="email"]')

        //by tag name, attribute with value, ID, class value
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        //find by own attribute
        cy.get('[data-cy="imputEmail1"]')

        //element contains partial text value
        cy.get('[id*="Email1"]')

        //element with a value that starts with
        cy.get('[id^=input]')

        //element witha a value ends with
        cy.get('[id$=Email1]')
    })

})

