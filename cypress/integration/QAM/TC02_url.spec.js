describe('Create and mark-unmark as favourite', function(){
  it('Sign in', function(){
    cy.visit('https://react-redux.realworld.io/#/login')
    cy.title().should('eq','Conduit')
    cy.location('protocol').should('eq', 'https:')
    cy.get('input[type="email"]').type('gangulasaipranay@gmail.com')
    cy.get('input[type="password"]').type('1234567890')
    cy.get('.btn').contains('Sign in').should('be.visible').click()
    // cy.get('a').contains('Your Feed', {timeout: 10000})
    cy.contains('Your Feed', {timeout: 10000}).should('be.visible')
  })

  it('New Post', function() {
    cy.contains('New Post').click()
    cy.get('input[placeholder="Article Title"]').type('Title')
    cy.get('input[placeholder="What\'s this article about?"]').type('Learning cypress')
    cy.get('textarea[placeholder="Write your article (in markdown)"]').type('It\'s fun to learn cypress :-)')
    cy.get('.btn').contains('Publish').click()
    cy.url().should('include','article')
  })

  it('Mark and Unmark fav', function(){
    cy.get('a').contains('SaiPranay').click()
    cy.contains('My Articles').should('be.visible')
    cy.get('.ion-heart').click()
    cy.hash().should('include','#/@SaiPranay')
    cy.contains('Favorited Articles').click()
    cy.get('.ion-heart').click()
    cy.reload()
    cy.contains('No articles are here... yet.').should('be.visible')
    cy.go('back') // cy.go(-1)
    // cy.go('forward') or cy.go(1)
  })
})
