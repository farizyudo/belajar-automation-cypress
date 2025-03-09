import loginPage from "./pageObject/loginPage"

// ***********************************************
// This example commands.js shows you how to
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
Cypress.Commands.add('login', (user_name, passwrd) => {
    loginPage.inputUsername(user_name)
    cy.get('[data-test="password"]') // Selector menggunakan Data Test
        .type(passwrd)
    cy.get('.submit-button.btn_action')  // Selector menggunakan Class
        .click()
})

Cypress.Commands.add('ketik', (locator, value) => {
    cy.get(locator).clear().type(value)
})
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
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })