/// <reference types= "cypress" />

describe("Dashboard Functionality Test", () => {
    beforeEach(() => {
        
        cy.visit('https://opensource-demo.orangehrmlive.com')
       // cy.wait(90000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type ('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type ('admin123');
        
        cy.get('.oxd-button').click()
       /* cy.intercept({
            method: 'GET',
            url: '/api/v2/dashboard/employees/action-summary'
            
        }).as('actions')*/
    })

    it.only("Verify if dashboard drop down feature: ABOUT is functional", () => {
       /* cy.wait('@actions').then((intercept) =>{
            expect(intercept.status_code).to.equal(200)
        })*/
        cy.get(':nth-child(1) > .oxd-userdropdown-link').click()
        cy.get('.oxd-dialog-close-button').click()
    })

    it("Verify if dashboard drop down feature:SUPPORT is functional", () => {
        cy.get(':nth-child(2) > .oxd-userdropdown-link').click()
        //cy.get('.orangehrm-support-link').click()
    })
    
    it("Verify that the dashbaord feature: Change Password is functional", () => {
        cy.get(':nth-child(3) > .oxd-userdropdown-link').click()
        cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Becca08131');
        cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Becca08131');
        cy.get('.user-password-cell > .oxd-text').should('have.text', 'For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers')
        cy.get('.oxd-button--secondary').click() 

    })
    it("Verify if the dashboard feature: Cancel Button under Change Password is functional", () => {
        cy.get(':nth-child(3) > .oxd-userdropdown-link').click()
        cy.get('.oxd-button--ghost').click()
    })

    it("Verify that the dashboard feature: Logout Feature is functional", () => {
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
        
    })
    it("verify that the Help feature is functional", () => {

        cy.get('.oxd-topbar-body-nav-slot > .oxd-icon-button').click()

    })
    
       
        
    
})
