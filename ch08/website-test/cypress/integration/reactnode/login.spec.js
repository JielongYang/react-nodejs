/// <reference types="Cypress" />

context('Login', () => {
    beforeEach(() => {
        cy.visit('http://reactnode.com/login')
    })

    it('login test', () => {
        cy.get('[type="text"]').type('admin')
        cy.get('[type="password"]').type('123456')
        cy.contains('login').click()

        cy.url().should('include', 'http://reactnode.com/topics')
    })
})