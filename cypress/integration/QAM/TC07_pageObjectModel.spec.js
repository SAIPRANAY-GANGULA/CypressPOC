import LogIn from "../PageObjects/login";

describe('Login', () => {
  const login = new LogIn()
  it('Sign in', () => {
    cy.visit('https://react-redux.realworld.io/#/login')
    login.email().type('gangulasaipranay@gmail.com')
    login.password().type('1234567890')
    login.signInButton().should('be.visible').click()
  })
})
