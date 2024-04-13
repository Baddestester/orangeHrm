import './commands'
import './login.actions'


beforeEach(()=>{
    Cypress.on('uncaught:exception', () => {
        return false;
    })

    cy.visit('/')
})