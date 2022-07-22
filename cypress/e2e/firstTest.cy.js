/// <reference types="cypress" />

import { navigateTo } from "../support/page-objects/navigationPage"
import { onTheSmartTablePage } from "../support/page-objects/smartTablePage"

describe('First test suite', () => {

    beforeEach('open application', () => {
        cy.loginToApplication()
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

    it('finding web elements', () => {
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

    it('working with the subject of the command', () => {
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card','Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.contains('nb-card','Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')
        cy.contains('nb-card','Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')
        cy.contains('nb-card','Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')

        // const firstForm = cy.contains('nb-card','Using the Grid')
        // const secondForm = cy.contains('nb-card','Basic form')
        // firstForm.find('[for="inputEmail1"]').should('contain', 'Email')
        // firstForm.find('[for="inputPassword2"]').should('contain', 'Password')
        // secondForm.find('[for="exampleInputEmail1"]').should('contain', 'Email address')
        // secondForm.find('[for="exampleInputPassword1"]').should('contain', 'Password')

        // Cypress way of doing things
        cy.contains('nb-card','Using the Grid').then( firstForm => {
            const emailLabel1 = firstForm.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
            expect(emailLabel1).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password')

            cy.contains('nb-card','Basic form').then( secondForm => {
                const secondPasswordText = secondForm.find('[for="exampleInputPassword1"]').text()
                expect(secondPasswordText).to.equal(passwordLabelFirst)
                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')
                cy.wrap(secondPasswordText).as('SecondPassword')
            })
        })

        cy.get('@SecondPassword').should('contain', 'Password')
    })

    it('invoke command', () => {
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //1
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email').should('have.class', 'label')

        //2
        cy.get('[for="exampleInputEmail1"]').then( label => {
            expect(label.text()).to.equal('Email address')
            expect(label).to.have.class('label')
            cy.wrap(label).should('have.class', 'label')
        })

        //3
        cy.get('[for="exampleInputEmail1"]').invoke('text').then( myText => {
            expect(myText).to.equal('Email address')
        })

        // cy.contains('nb-card','Basic form')
        //     .find('nb-checkbox')
        //     .click()
        //     .find('.custom-checkbox')
        //     .invoke('attr', 'class')
        //     .should('contain', 'checked')
        //     .then( myValue => {
        //         expect(myValue).to.contains('checked')
        //     })

        cy.contains('nb-card','Basic form').find('nb-checkbox').then( myBox => {
            cy.wrap(myBox).find('.custom-checkbox').invoke('attr', 'class').then( myAttribute => {
                if(myAttribute.includes('checked')){
                    cy.wrap(myBox).click()
                }
             })
        })
    })

    it('invoke property', () => {
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
            cy.wrap(input).click()
            cy.get('nb-calendar-picker').contains('20').click()
            cy.wrap(input).invoke('prop', 'value').should('contain', 'Jul 20, 2022')
            cy.wrap(input).should('have.value', 'Jul 20, 2022')
            cy.wrap(input).should('have.prop', 'value', 'Jul 20, 2022')
            expect(input).to.have.prop('value', 'Jul 20, 2022')
        })

    })

    it('trigger', () => {
        cy.contains('Modal & Overlays').click()
        cy.contains('Popover').click()

        cy.contains('nb-card', 'Popover Position').find('[nbpopoverplacement="right"]').trigger('mouseenter')

    })

    it('checkboxes', () => {
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()

        //cy.get('[type="checkbox"]').uncheck({force:true})
        cy.get('[type="checkbox"]').first().check({force:true})
    })

    it('radio buttons', () => {
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card','Using the Grid').find('[type="radio"]').first().check({force: true})
    })

    it('drop downs', () => {

        cy.get('nav nb-select').click()
        cy.get('.options-list').contains('Dark').click()
        cy.get('nav nb-select').should('contain', 'Dark')
        
        cy.get('nav nb-select').then( dropDownBox => {
            cy.wrap(dropDownBox).click()
            cy.get('.options-list nb-option').each( (listItem, index, listOfElements) => {
                const listItemText = listItem.text()

                cy.wrap(listItem).click()
                cy.wrap(dropDownBox).should('contain', listItemText)

                if(index !== listOfElements.length-1){
                    cy.wrap(dropDownBox).click()
                }
            })
        })
        
    })

    it('web tables', () => {
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        //1 update age
        cy.get('tbody').contains('tr', 'Larry').then( tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('30')
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').should('contain', '30')
        })

        //2 within method
        onTheSmartTablePage.updateAndValidateAgeByFirstName('Larry', '50')

    })

    it.only('datepicker', () => {
        function selectDayFromCurrent(day){
            let date = new Date()
            date.setDate(date.getDate() + day) 
            let futureDate = date.getDate()
            let futureMonth = date.toLocaleDateString('en-US', {month: 'short'})
            let dateToAssert = `${futureMonth} ${futureDate}, ${date.getFullYear()}`

            cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then( dateAttributeValue => {
                if(!dateAttributeValue.includes(futureMonth)){
                    cy.get('[data-name="chevron-right"]').click()
                    selectDayFromCurrent(day)
                } else {
                    cy.get('.day-cell').not('.bounding-month').contains(futureDate).click()
                }
            })
            return dateToAssert
        }


        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
            cy.wrap(input).click()
            var dateToAssert = selectDayFromCurrent(40)
            cy.wrap(input).should('have.value', dateToAssert)
        })
    })

})

