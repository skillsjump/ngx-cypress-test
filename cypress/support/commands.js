/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
//Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginToApplication', () => {

    const userCredentials = {
        "user": {
            "email": Cypress.env('username'),
            "password": Cypress.env('password')
        }
    }

    cy.request('POST', `${Cypress.env('apiUrl')}users/login`, userCredentials)
        .its('body.user.token').then(token => {
            cy.wrap(token).as('myToken')
            cy.visit('/', {
                onBeforeLoad(win){
                    win.localStorage.setItem('jwtToken', token)
                }
            })
        })

})
