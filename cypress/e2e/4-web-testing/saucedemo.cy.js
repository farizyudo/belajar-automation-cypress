describe('WEB UI Saucedemo', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Login Failed - Wrong Username and Password', () => {
        cy.get('#user-name')                 // Menggunakan Selector ID
            .clear()                         // Opsional untuk menghapus data pada form input
            .type('username')                // Untuk mengisi data pada form input
        cy.get('[data-test="password"]') // Selector menggunakan Data Test
            .type('password')
        cy.get('.submit-button.btn_action')  // Selector menggunakan Class
            .click()
        cy.get('[data-test="error"]').should('contain.text', // Contain = harus ada kata kata ini 
            'Username and password do not match any user in this service')
        cy.get('[data-test="error"]').should('be.visible') // should be.visible = Atribut harus muncul
    });

    it('Login Failed - Locked User', () => {
        cy.get('#user-name')
            .type(Cypress.env('lockedUser'))
        cy.get('[data-test="password"]')
            .type('secret_sauce')
        cy.get('.submit-button.btn_action')
            .click()
        // cy.get('[data-test="title"]').should('be.visible')
        cy.get('[data-test="error"]').should('contain.text', // Contain = harus ada kata kata ini 
            'Sorry, this user has been locked out')
    });

    it('Login Success', () => {
        cy.get('#user-name')                 // Menggunakan Selector ID
            .type('standard_user')
        cy.get('[data-test="password"]')     // Selector menggunakan Data Test
            .type('secret_sauce')
        cy.get('.submit-button.btn_action')  // Selector menggunakan Class
            .click()
        cy.get('[data-test="title"]').should('be.visible')
        cy.url().should('include', '/inventory.html')

    });
})