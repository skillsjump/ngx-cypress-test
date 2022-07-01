/// <reference types="cypress" />

describe('First test suite', () => {

    beforeEach('open application', () => {
        cy.visit('/')
    })

    it('first test', () => {
        cy.get('nb-user').should('contain', 'Nick Jones')
    })

    it('Types of locators', () => {
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
        cy.get('[id^=input]').contains('email')

        //element witha a value ends with
        cy.get('[id$=Email1]')
    })

    it.only('finding web elements', () => {
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // get() - search elements globally by locator
        // find() - seach child elements within the scope of previous DOM object
        // contains() - seach elements by text.

        cy.contains('Sign in')

        cy.contains('[status="warning"]','Sign in')

        cy.get('#inputEmail1')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-radio')
            .first()
            .find('input')
            .click({force: true})
        
        cy.get('.inline-form-card').find('button')
        cy.get('.inline-form-card button')

        cy.get('.inline-form-card').contains('Submit')

        cy.contains('nb-card','Horizontal form').find('button')

        //helper commands
        // first() - find the first element
        // last() -find the last element from the list
        // next() - find the next element siblings
        // prev() - previous element siblings
        // eq() - find by index
        // not() - exclude some element from the list
    })

})

