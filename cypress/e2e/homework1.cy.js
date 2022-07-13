/// <reference types="cypress" />

describe('Homework Test', () => {

    beforeEach('open application', () => {
        cy.visit('/')
    })
    it('first test', () => {
        cy.contains('Modal & Overlays').click()
        cy.contains('Dialog').click()
        cy.contains('Enter Name').click()
        cy.contains('nb-card', 'Enter your name').find('input').type('Navin')
        cy.contains('Submit').click()
        cy.contains('nb-card', 'Names').find('.ng-star-inserted').should('have.text', 'Navin')
        cy.contains('Enter Name').click()
        cy.contains('nb-card', 'Enter your name').find('input').type('Batman')
        cy.contains('Submit').click()
        cy.contains('nb-card', 'Names').find('.ng-star-inserted').should('have.text', 'NavinBatman')
    })
})
