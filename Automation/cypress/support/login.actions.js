Cypress.Commands.add('Login',(username)=>{
    cy.fixture('elements').then((el)=>{
        cy.wait(8000)
        cy.get(el.usernameField).should('be.visible').type(el.username)
        cy.get(el.passwordField).should('be.visible').type(el.password)
        cy.get(el.loginButton).should('be.visible').click();
    })

})