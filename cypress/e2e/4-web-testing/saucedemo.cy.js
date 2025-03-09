// Import support file
import loginPage from "../../support/pageObject/loginPage";
// Memanggil Fixture
const userData = require('../../fixtures/users2.json')

describe('WEB UI Saucedemo', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    // Login Failed 1
    it('Login Failed - Wrong Username and Password', () => {
        cy.get('#user-name')                 // Menggunakan Selector ID
            .clear()                         // Opsional untuk menghapus data pada form input
            .type(userData.invalid_user)                // Untuk mengisi data pada form input
        cy.get('[data-test="password"]') // Selector menggunakan Data Test
            .type('password')
        cy.get('.submit-button.btn_action')  // Selector menggunakan Class
            .click()
        cy.get('[data-test="error"]').should('contain.text', // Contain = harus ada kata kata ini 
            'Username and password do not match any user in this service')
        cy.get('[data-test="error"]').should('be.visible') // should be.visible = Atribut harus muncul
    });

    // loggin failed 2 using POM (Page Object Model)
    it('Login Failed - Wrong Username and Password', () => {
        cy.get(loginPage.username)                 // Menggunakan Selector ID
            .clear()                         // Opsional untuk menghapus data pada form input
            .type('username')                // Untuk mengisi data pada form input
        cy.get(loginPage.password) // Selector menggunakan Data Test
            .type('password')
        cy.get(loginPage.btnLogin)  // Selector menggunakan Class
            .click()
        // cy.get(loginPage.errorMessage).should('contain.text', // Contain = harus ada kata kata ini 
        //     'Username and password do not match any user in this service')
        cy.get(loginPage.errorMessage).should('be.visible') // should be.visible = Atribut harus muncul
    });

    // Login locked user
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


    // Loggin Success 1 normal
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

    // Loggin success 2 using POM to input
    it('Login Success - using POM', () => {
        // cy.get('#user-name')                 // Menggunakan Selector ID
        //     .clear()                         // Opsional untuk menghapus data pada form input
        //     .type('username')                // Untuk mengisi data pada form input
        loginPage.inputUsername('standard_user')
        cy.get(loginPage.password) // Selector menggunakan Data Test
            .type('secret_sauce')
        cy.get(loginPage.btnLogin)  // Selector menggunakan Class
            .click()
        cy.get('[data-test="title"]').should('be.visible')
        cy.url().should('include', '/inventory.html')
    });

    // Loggin success 3 using Custom Command
    it('Login Success - Custom Command', () => {
        cy.login('standard_user', 'secret_sauce')
        cy.get('[data-test="title"]').should('be.visible')
        cy.url().should('include', '/inventory.html')
    });


    it('Login Success - using POM and Custom Command', () => {
        // cy.get('#user-name')                 // Menggunakan Selector ID
        //     .clear()                         // Opsional untuk menghapus data pada form input
        //     .type('username')                // Untuk mengisi data pada form input
        loginPage.inputUsername('standard_user')
        cy.ketik(loginPage.password, 'secret_sauce')
        cy.get('.submit-button.btn_action')  // Selector menggunakan Class
            .click()
        cy.get('[data-test="title"]').should('be.visible')
        cy.url().should('include', '/inventory.html')
    });

})