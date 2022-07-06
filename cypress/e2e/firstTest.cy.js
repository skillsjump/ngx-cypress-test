///<reference types="cypress" />

describe('First test suite', () => {

   beforeEach('open application' , () => {
      
    cy.visit('/')
            
        })
    
  it('first test' , ()  => {

    cy.log('Test One')
  }) 

 it('second test' , ()  => {
    cy.log('Test Two')

  }) 

  it('third test' , ()  => {
    cy.log('Test Three')

 }) 

})



