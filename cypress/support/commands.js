Cypress.Commands.add('signIn', () => {
  cy.visit("/#/login");
  cy.location("protocol").should("eq", "https:");
  cy.title().should("eq", "Conduit");
  cy.get("form").within(($form) => {
    cy.get("input[type=\"email\"]").type("gangulasaipranay@gmail.com");
    cy.get("input[type=\"password\"]").type("1234567890");
    cy.root().submit(); // submit the form yielded from within
  });
  cy.contains("Your Feed", { timeout: 9000 }).should("be.visible");
})
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
