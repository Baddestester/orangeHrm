describe('login in orangehrm demo site', () => {
    
    it('verify if login details is valid', ()=> {
        cy.fixture('elements').then((el)=> {
            cy.Login(el.admin)


        })

    })
})