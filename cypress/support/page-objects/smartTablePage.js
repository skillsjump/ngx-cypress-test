

class SmartTablePage{

    /**
     * This method update the age in the table based on the First Name of the user
     * @param {*} firstName 
     * @param {*} age 
     */
    updateAndValidateAgeByFirstName(firstName, age){
        cy.get('tbody').contains('tr', firstName).within(() => {
            cy.get('.nb-edit').click()
            cy.get('[placeholder="Age"]').clear().type(age)
            cy.get('.nb-checkmark').click()
            cy.get('td').should('contain', age)
        })
    }

    filloutFirstName(name){
        cy.contains('firstName').type(name)
    }

    filloutLastName(name){
        cy.contains('lastName').type(name)
    }


}


export const onTheSmartTablePage = new SmartTablePage()