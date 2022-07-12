/// <reference types="cypress" />

describe('Homework Test', () => {

    beforeEach('open application', () => {
        cy.visit('/')
    })
    it('first test', () => {
        cy.contains('Modal & Overlays').click()
        cy.contains('Dialog').click()
        cy.contains('Enter Name').click()
        cy.contains('Enter your name')
        cy.get('.ng-star-inserted > nb-card > nb-card-body > .size-medium').click().type('Navin')
    })
// it('navigate to dialog page', () =>{
//     cy.click('')
})
