

describe('work with apis', () => {

    it('work with tags', () => {
        // cy.intercept('GET', 'https://api.realworld.io/api/tags', {fixture: 'tags.json'})
        cy.intercept({method: 'Get', path: 'tags'}, {fixture: 'tags.json'})
        cy.loginToApplication()
    })

    it('verify api response', () => {
        cy.intercept('GET', 'https://api.realworld.io/api/tags').as('getTags')
        cy.loginToApplication()
        cy.wait('@getTags').then( myResponseTags => {
            const secondTag = myResponseTags.response.body.tags[1]
            expect(secondTag).to.equal('welcome')
        })
    })

    it.only('create and delete article', () => {
        // cy.intercept('https://api.realworld.io/api/users/login').as('getToken')
        cy.loginToApplication()
        // cy.contains('Sign in').click()
        // cy.get('[placeholder="Email"]').type('beauty123@test.com')
        // cy.get('[placeholder="Password"]').type('Welcome1')
        // cy.get('[type="submit"]').click()

        // cy.wait('@getToken').then( tokenResponse => {
        //     const token = tokenResponse.response.body.user.token
        //     cy.wrap(token).as('myToken')
        // })

        cy.fixture('newArticle.json').then(articleRequestBody => {
            cy.get('@myToken').then( myToken => {
                cy.request({
                    url: `${Cypress.env('apiUrl')}articles/`,
                    headers: {'Authorization': 'Token ' + myToken},
                    method: 'POST',
                    body: articleRequestBody
                })
            })
        })

        cy.contains('Global Feed').click()
        cy.contains('Test title 2').click()
        cy.contains('Delete Article').eq(0).click()
        cy.intercept(`${Cypress.env('apiUrl')}articles?limit=10&offset=0`).as('globalFeed')
        cy.contains('Global Feed').click()
        cy.wait('@globalFeed')
        cy.get('app-article-list').should('not.contain', 'Test title 2')
    })


})