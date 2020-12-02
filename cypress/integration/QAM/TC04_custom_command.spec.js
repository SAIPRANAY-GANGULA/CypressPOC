describe("Custom Commands Illustration", function() {

  Cypress.config('pageLoadTimeout', 10000)
  // configurations are set using this method are applicable only to this particular test
  // To set configurations globally we need to set options in cypress.json file
  // for more info and more options visit https://docs.cypress.io/guides/references/configuration.html#Options

  it("Sign in", function() {
    cy.signIn()
  });
})
