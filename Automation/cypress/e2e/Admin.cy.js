/// <reference types ="cypress" />

describe("Admin Functionality Test", () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com')
        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
         })
         
     it('Verify if admin feature is functional', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    })
     it.only('Verify if User Management feature is valid', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
        cy.get(':nth-child(2) > .oxd-input').type('BrianTest011')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click([2])
        cy.get('.oxd-autocomplete-text-input > input').type('Briana Testa')
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click([0])
        cy.get('.oxd-button--ghost').click()
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
        })
    it('Verify if the add feature is functional', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
        cy.get('.oxd-autocomplete-text-input > input').type('Briana Testa')
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('BrainTest')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Brain1234#')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Brain1234#')
        cy.get('.user-password-cell > .oxd-text').should('have.text', 'For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers')
        cy.get('.oxd-button--secondary').click()
        cy.get('.oxd-button--ghost').click()    
        cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
     })
    it('Verify if the delete feature on the Records Found is functional', ()=> {
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
        cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
        cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
        cy.get(':nth-child(5) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click()
        cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'Are you Sure?') 
        cy.get('.orangehrm-text-center-align > .oxd-text').should('have.text', 'The selected record will be permanently deleted. Are you sure you want to continue?')
        //cy.get('.oxd-button--text').click()// Cancel Button
        cy.get('.oxd-button--label-danger').click()// Delete
    })
    it('Verify if the edit feature on the records Found is functional', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click() //admin menu button
        cy.get(':nth-child(3) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click([1])
        cy.get('.oxd-button--secondary').click()// Save button
        cy.get('.oxd-button--ghost').click()
        //cy.get(':nth-child(2) > .oxd-pagination-page-item').click()// Username
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()// Dropdown button
        cy.get('.orangehrm-header-container > .oxd-button').click()//Add button
       // cy.get('.oxd-button--ghost').click()//Cancel button

         })
    it('Verify if Job feature: Job Title under Admin is functional', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
        cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
        cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
        /*cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
        cy.get(':nth-child(1) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(1)').click()
        cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'Are you Sure?')
        cy.get('.orangehrm-text-center-align > .oxd-text').should('have.text', 'The selected record will be permanently deleted. Are you sure you want to continue?')
        cy.get('.oxd-button--label-danger').click()
        cy.get(':nth-child(1) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
       // cy.get('.oxd-file-div > .oxd-icon').click()// Browse button
       // cy.get('.oxd-button--ghost').click()// Cancel button
        cy.get('.oxd-button--secondary').click()// Save button*/
    })
    
    it("Verify if job feature: Pay Grade under Admin is functional", () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').click()
        cy.get('.oxd-button').click()
        cy.get(':nth-child(2) > .oxd-input').type('Grade 14')
        //cy.get('.oxd-button--secondary').click()
        cy.get('.oxd-button--ghost').click()//Cancel
       
    })
    it('verify if Job feature: Employment Status under Admin is functional', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click() 
        cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-link').click()
        cy.get('.oxd-button').click()
        cy.get(':nth-child(2) > .oxd-input').type('Fulltime Internship')
       // cy.get('.oxd-button--secondary').click()// save button
        cy.get('.oxd-button--ghost').click()// cancel button
        cy.get(':nth-child(5) > .oxd-table-row > [style="flex-shrink: 1;"] > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click()
        cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'Are you Sure?')
        cy.get('.orangehrm-text-center-align > .oxd-text').should('have.text', 'The selected record will be permanently deleted. Are you sure you want to continue?')
        //cy.get('.oxd-button--text').click()
        //cy.get('.oxd-button--label-danger').click()
        cy.get('.oxd-button--text').click()
    })
    it('Verify if Job feature: Job categories under Admin is functional', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
        cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-link').click()
        cy.get('.oxd-button').click()
        cy.get(':nth-child(2) > .oxd-input').type('Technicians')
        //cy.get('.oxd-button--secondary').click() //add button
        cy.get('.oxd-button--ghost').click()// cancel button
        cy.get(':nth-child(1) > .oxd-table-row > [style="flex-shrink: 1;"] > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click()
        cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'Are you Sure?')
        cy.get('.orangehrm-text-center-align > .oxd-text').should('have.text', 'The selected record will be permanently deleted. Are you sure you want to continue?')
        cy.get('.oxd-button--label-danger').click()// delete button
        cy.get('.oxd-button').click()// add button
        cy.get(':nth-child(2) > .oxd-input').type ('Laborers and Helpers')
        //cy.get('.oxd-button--secondary').click() // save button
        cy.get('.oxd-button--ghost').click()// Cancel Button
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()
        cy.get('.orangehrm-horizontal-padding > div > .oxd-button').should('have.text', ' Delete Selected ')
        cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click()
        cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'Are you Sure?')
        cy.get('.orangehrm-text-center-align > .oxd-text').should('have.text', 'The selected record will be permanently deleted. Are you sure you want to continue?')
       // cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click()// Delete
        cy.get('.oxd-button--text').click()// cancel button
        cy.get(':nth-child(4) > .oxd-table-row > [style="flex-shrink: 1;"] > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click() // Edit button
        cy.get(':nth-child(2) > .oxd-input').type('and Executives')
        cy.get('.oxd-button--secondary').click()
        //cy.get('.oxd-button--ghost').click()// cancel button
     })
    it('Verify if Job feature: Workshift under admin feature is functional', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
        cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-link').click()
        cy.get('.oxd-button').click()
        cy.get(':nth-child(2) > .oxd-input').type('Private')
        cy.get('.oxd-button--ghost').click()// Cancel button
     })
    it('Verify if the Organization feature: General Information under admin is functional', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
        cy.get('.oxd-dropdown-menu > :nth-child(1)').click()
        cy.get('.oxd-switch-wrapper > label').click()// Edit Button
        cy.get('.oxd-select-text--after > .oxd-icon').click()// country drop down
        cy.get(':nth-child(7) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('4') 
        cy.get('.oxd-button').click()// save button      
     })
    it('Verify if Organization feature: Locations under admin is functional', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').click()
        cy.get(':nth-child(3) > .oxd-icon-button > .oxd-icon').click()// Locations drop down
        cy.get('.orangehrm-header-container > div > .oxd-button').click()// add button
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Gucci')
        cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('New York')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('United State')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('10022')
        cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('(212)826-2600')
        cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('725 Fifth Avenue New York')
        cy.get('.oxd-select-text--after > .oxd-icon').click()// country drop down
       // cy.get('.oxd-button--secondary').click()// Save button
       cy.get('.oxd-button--ghost').click()// cancel button
       cy.get('.oxd-table-header > .oxd-table-row > :nth-child(1)').click()
       cy.get('.orangehrm-horizontal-padding > div > .oxd-button').should('have.text', ' Delete Selected ')
   })
   it('Verify if Organization feature: Structure under admin functional', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-link').click()
    cy.get('.oxd-switch-input').click()//Edit button
    cy.get('.oxd-button').click()//Add button
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('IT')
    cy.get('.oxd-button--ghost').click()// Cancel button
    //cy.get('.oxd-form-actions > .oxd-button--secondary').click()// Save button
    cy.get('.--last > .oxd-tree-node-content > .oxd-sheet > .org-action > :nth-child(1)').click()
    cy.get('.orangehrm-modal-header > .oxd-text').should('have.text', 'Are you Sure?')
    cy.get('.orangehrm-text-center-align > .oxd-text').should('have.text', 'The selected record will be permanently deleted. Are you sure you want to continue?')
    cy.get('.oxd-button--label-danger').click()
    cy.get('.--last > .oxd-tree-node-content > .oxd-sheet > .org-action > :nth-child(3)').click()// Plus button
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('QA')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
 })
it('Verify if Qualification feature under admin is functional', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
    cy.get('.oxd-button').click()// Add button
    cy.get(':nth-child(2) > .oxd-input').type('Quality Assurance Tester')
    cy.get('.oxd-textarea').type('Software Tester')
  //  cy.get('.oxd-button--secondary').click()// Save Button
    cy.get('.oxd-button--ghost').click()// Cancel Button
    cy.get(':nth-child(7) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()//Edit Button
    cy.get('.oxd-textarea').type('s')
    cy.get('.oxd-button--secondary').click() 

   })
   it('Verify if Qualification feature: Education is functional', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-link').click()
    cy.get('.oxd-button').click()
    cy.get(':nth-child(2) > .oxd-input').type ('Doctorate Degree')
    //cy.get('.oxd-button--secondary').click()// Save button
    cy.get('.oxd-button--ghost').click()// Cancel Button
    cy.get(':nth-child(2) > .oxd-table-row > [style="flex-shrink: 1;"] > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click()// Delete Button
    cy.contains('Are you Sure?')
    cy.contains('The selected record will be permanently deleted. Are you sure you want to continue?')
    cy.contains('Yes, Delete').click()
    cy.get(':nth-child(2) > .oxd-table-row > [style="flex-shrink: 1;"] > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()// Edit Button
    cy.get(':nth-child(2) > .oxd-input').type('t')
    //cy.get('.oxd-button--secondary').click()// Save button
    cy.get('.oxd-button--ghost').click()// Cancel Button
    })

   it('Verify if Qualification feature: Licenses is functional', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-link').click()
    cy.get('.oxd-button').click()// Add Button
    cy.get(':nth-child(2) > .oxd-input').type('Project Management Professional')
    cy.get('.oxd-button--secondary').click()// Save Button
    //cy.contains('Cancel').click()
    cy.get(':nth-child(7) > .oxd-table-row > [style="flex-shrink: 1;"] > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click()// Delete
    cy.contains('Are you Sure?')
    cy.contains('The selected record will be permanently deleted. Are you sure you want to continue?')
    cy.wait(2000)
    cy.contains('Yes, Delete').click()

   })
   it('Verify if Qualifiication feature: Languages is functional', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-link').click()
    cy.get('.oxd-button').click()
    cy.get(':nth-child(2) > .oxd-input').type('Hindu')
    cy.get('.oxd-button--secondary').click()//Save
   // cy.get('.oxd-button--ghost')//cancel
    cy.get(':nth-child(6) > .oxd-table-row > [style="flex-shrink: 1;"] > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click()// Delete
    cy.contains('Are you Sure?')
    cy.get('.orangehrm-text-center-align > .oxd-text').should('have.text', 'The selected record will be permanently deleted. Are you sure you want to continue?')
    cy.get('.oxd-button--label-danger').click()
 })
   it('Verify if Qualification feature: Membership', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-link').click()
    cy.get('.oxd-button').click()// Add Button
    cy.get(':nth-child(2) > .oxd-input').type('Marie Forleo B-School');
    //cy.get('.oxd-button--secondary').click()// Save Button
    cy.get('.oxd-button--ghost').click()// Cancel Button
    cy.get(':nth-child(5) > .oxd-table-row > [style="flex-shrink: 1;"] > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click()// Delete Button
    cy.get('.orangehrm-modal-header > .oxd-text').should('have.text','Are you Sure?')
    cy.get('.orangehrm-text-center-align > .oxd-text').should('have.text', 'The selected record will be permanently deleted. Are you sure you want to continue?')
    cy.get('.oxd-button--label-danger').click() 
 })
   it('Verify if the More feature: Nationality is functional', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(1) > li > .oxd-topbar-body-nav-tab-link').click()// Nationality button
    cy.get(':nth-child(2) > .oxd-pagination-page-item').click()// slide 2
    cy.wait(2000)
    cy.get(':nth-child(4) > .oxd-pagination-page-item').click()// slide 3
    cy.wait(2000)
    cy.get(':nth-child(5) > .oxd-pagination-page-item').click()// slide 4
    cy.wait(2000)
    cy.get(':nth-child(1) > .oxd-pagination-page-item').click()
    cy.get(':nth-child(14) > .oxd-table-row > [style="flex-shrink: 1;"] > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click()// Delete Button
    cy.contains('Are you Sure?')
    cy.contains('The selected record will be permanently deleted. Are you sure you want to continue?')
    cy.contains('No, Cancel').click()

    })
 it('Verify if the More feature: Corporate Branding', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(2) > li > .oxd-topbar-body-nav-tab-link').click()
    cy.get(':nth-child(3) > .oxd-input-group > .orangehrm-color-input-wrapper > .oxd-color-input > .oxd-color-input-preview').click()// Primary font color
    cy.get('.orangehrm-actions-group > :nth-child(1)').click()// Reset to Default
    cy.get('.orangehrm-actions-group > :nth-child(2)').click()// Preview
    cy.get('.oxd-button--secondary').click()// Publish
    cy.get('.orangehrm-actions-group > :nth-child(1)').click()// Reset to Default

    })
   it('Verify if the More feature: Configuration is functional', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()// More feature
    cy.get(':nth-child(3) > li > .oxd-topbar-body-nav-tab-link').click()
    cy.get('.oxd-topbar-body-nav-tab-accordian > :nth-child(1) > a').click()// Email configuration
    cy.get('.oxd-button--secondary').click()// Save button
    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()// More feature
    cy.get(':nth-child(3) > li > .oxd-topbar-body-nav-tab-link').click()// Configuration
    cy.get('.oxd-topbar-body-nav-tab-accordian > :nth-child(2) > a').click()// Email Sub
    cy.get(':nth-child(1) > .oxd-table-row > [style="flex: 1 1 15%;"] > .oxd-table-cell-actions > .oxd-icon-button').click()// Leave icon
    cy.get('.oxd-button').click()//Add button
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Chidinma Ofume')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('chidinmaofume@gmail.com')
    //cy.get('.oxd-form-actions > .oxd-button--secondary').click()// Save button
    cy.get('.oxd-button--ghost').click()//cancel
    cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click()// Delete
    cy.contains('Are you Sure?')
    cy.contains('The selected record will be permanently deleted. Are you sure you want to continue?')
    cy.contains('No, Cancel').click()

   })
   it('Verify if the More feature: Configuration cont', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(3) > li > .oxd-topbar-body-nav-tab-link').click()
    cy.get('.oxd-topbar-body-nav-tab-accordian > :nth-child(3) > a').click()// Localization
    //cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()// dropdown
    cy.get('.oxd-button').click()// save

   })
   it('Verify if configuration feature: Language packages is functional', () => {
    cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()
    cy.get(':nth-child(3) > li > .oxd-topbar-body-nav-tab-link').click()
    cy.get('.oxd-topbar-body-nav-tab-accordian > :nth-child(4) > a').click()
    cy.get(':nth-child(5) > .oxd-table-row > [style="flex: 1 1 30%;"] > .oxd-table-cell-actions > :nth-child(1)').click()// Translate English
    cy.get(':nth-child(3) > .oxd-icon-button > .oxd-icon').click()// Translate Language Icon
    cy.get(':nth-child(3) > .oxd-pagination-page-item').click()// icon 2
    cy.get(':nth-child(4) > .oxd-pagination-page-item').click()// icon 3
    cy.get(':nth-child(5) > .oxd-pagination-page-item').click()// icon 4
    cy.get(':nth-child(6) > .oxd-pagination-page-item').click()//icon 5
    cy.get(':nth-child(3) > .oxd-icon-button').click()// Translate language icon
    cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()

    })
     it('Verify if Configuration feature: Modules is functional', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get(':nth-child(5) > .oxd-topbar-body-nav-tab-item').click()// more
        cy.get(':nth-child(3) > li > .oxd-topbar-body-nav-tab-link').click()// configuration
        cy.get('.oxd-topbar-body-nav-tab-accordian > :nth-child(5) > a').click()
      //  cy.get(':nth-child(3) > .oxd-switch-wrapper > label > .oxd-switch-input').click()// leave icon
        cy.get('.oxd-button').click()
         })


})


      
    




 
       

    
   

   