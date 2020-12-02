describe('Login', function(){
    it('Sign in', function(){
      cy.visit('https://react-redux.realworld.io/#/login')
      cy.get('input[type="email"]').type('gangulasaipranay@gmail.com')
      cy.get('input[type="password"]').type('1234567890')
      cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
})
