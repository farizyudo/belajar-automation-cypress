class loginPages {
    username = '#user-name'
    password = '[data-test="password"]'
    btnLogin = '.submit-button.btn_action'
    errorMessage = '[data-test="error"]'

    inputUsername(name) {
        cy.get(this.username)
            .clear()
            .type(name)
    }
}
export default new loginPages()