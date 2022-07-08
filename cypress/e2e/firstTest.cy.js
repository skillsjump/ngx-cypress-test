







// get() - search elements globally by locator
// find() - search child elements within the scope of previous DOM object

const { Dropdown } = require("bootstrap");
const { createYield } = require("typescript");

cy.contains('Sign in')
cy.contains('[status="warning"]', 'Sign in')

cy.get('#imputEmail1')
    .parents('form')
    .find('button')
    .should('contain', 'Sign in')
    .parents('form')
    .find('nb-radio')
    .eq(0)
    .find('input')
    .click({force: true})

cy.get('.inline-form-card').find('button').click()
cy.get('.inline-form-card button')

cy.get('.inline-form-card').contains('Submit')
cy.contains('nb-card', 'Horizontal form').find('button')


//helper commands
// first() - find the first element
// last() - find the last element from the list
// next() - find the next element siblings
// prev() - previous element siblings
// eq() - find by index
// not() - exclude some element from the list



// const firstForm = cy.contains('nb-card', 'Using the Grid')
// const secondForm = cy.contains('nb-card', 'Basic form')
// firstForm.find('[for="inputEmail1"]').should('contain', 'Email')
// firstForm.find('[for="inputPassword2"]').should('contain', 'Password')
// secondForm.find('[for="exampleInputEmail1"]').should('contain', 'Email address')
// secondForm.find('[for="exampleInputPassword1"]').should('contain', 'Password')

// Cypress way of doing things
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    cy.contains('nb-card', 'Using the Grid').then( firstForm => {
        const emailLabe1 = firstForm.find('[for="inputEmail1"]').text()
        const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
        expect(emailLabe1).to.equal('Eamil')
        expect(passwordLabelFirst).to.equal('Password')

        cy.contains('nb-card', 'Basic form').then( secondForm => {
            const secondPasswordText = secondForm.find('[for="exampleInputPassword1"]').text()
            expect(secondPasswordText).to.equal(passwordLabelFirst)
            cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')
            cy.wrap(secondPasswordText).as('SecondPassword')
        })
    })


    cy.get('@SecondPassword').should('contain', 'Password')


    it.only('invoke command', () => {
        cy.contais('Forms').click()
        cy.contains('Form Layouts').click()

        //1
        cy.get('for="exampleInputEmail1"]').should('contain', 'Email').should('have.class', 'label') 

        //2
        cy.get('[for="exampleInputEmail1"]').then( label => {
            expect(label.text()).to.equal('Email address')
            expect(label).to.have.class('label')
        })

        //3
        cy.get('[for="exampleInputEmail"]').invoke('text').then( myText => {
            expect(myText).to.equal('Email address')
        })

    
      //  cy.contains('nb-card', 'Basic form')
            .find('nb-checkbox')
            .click()
            .find('.custom-checkbox')
            .invoke('attr', 'class')
            .should('contain', 'checked')
            .then( myValue => {
                expect(myValue).to.equal('checked')
            })

        })
 

        it.only('invoke property', () => {
            cy.contains('Forms').click()
            cy.contains('Datepicker').click()

            cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
                cy.wrap(input).click()
                cy.get('nb-calendar-picker').contains('20').click()
                cy.wrap(input).invoke('prop', 'value').should('contain', 'Jul 20,2022')
                cy.wrap(input).should('have.value', 'Jul20, 2022')
            })
        })




        it.only('trigger', () => {
            cy.contains('Modal & Overlays').click()
            cy.contains('Popover').click()

            cy.contains('nb-card', 'Popover Position').find('[nbpopoverplacement="right"]').trigger('mouseenter')
        })


        it.only('checkboxes', () => {
            cy.contains('Modal & Overlays').click()
            cy.contains('Toastr').click()

            //cy.get('[type="checkbox"]').uncheck({force:true})
            cy.get('[type="checkbox"]').first().check({force:true})
            
        })

        it.only('radio buttons', () => {
            cy.contains('Forms').click()
            cy.contains('Form Layouts').click()

           cy.contains('nb-card', 'Using the Grid').find('[type="radi"]').first().check({force: true})
        }) 


        it.only('drop downs',() => {
            cy.get('nav nb-select').click()
            cy.get('.options-list').contains('Dark').click()
            cy.get('nav nb-select').should('contain', 'Dark')

            cy.get('nav nb-select').then( dropDownBox => {
                cy.wrap(dropDownBox).click()
                cy.get('.options-list nb-option').each( (listItem, index) => {
                    cy.wrap(listItem).click()
                    cy.wrap(dropDownBox).click()

                    if(index === listOfElements.length-1) {
                        cy.wrap(dropDownBox).click()
                    }
                })
            })
        })
       