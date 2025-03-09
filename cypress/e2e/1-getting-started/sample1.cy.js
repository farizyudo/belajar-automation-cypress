/// <reference types="cypress" />


describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })

    it('Visits the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()

        // Should be on a new URL which
        // includes '/commands/actions'
        cy.url().should('include', '/commands/actions')

        cy.get('.action-email')
            // Get an input, type into it
            .type('fake@email.com')
            //  Verify that the value has been updated
            .should('have.value', 'fake@email.com')

        // Note
        //  Visit: https://example.cypress.io
        // Find the element with content: type
        // Click on it
        // Get the URL
        // Assert it includes: /commands/actions
        // Get the input with the action-email class
        // Type fake@email.com into the input
        // Assert the input reflects the new value
    })
})


// Akun Login Super Admin
// Email: senimankoding@gmail.com
// password: senimankoding

// Akun Login Admin
// Email: admin@senimankoding.com
// password: senimankoding

// Akun Login Mekanik
// Email: mekanik@senimankoding.com
// password: senimankoding

// Akun Login Kasir
// Email: kasir@senimankoding.com
// password: senimankoding