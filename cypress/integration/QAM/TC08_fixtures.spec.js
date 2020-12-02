// describe("Login", () => {
//   it("Sign in", () => {
//     cy.visit("https://react-redux.realworld.io/#/login");
//     cy.fixture("logInCredentials").then((user) => {
//       cy.get("input[type=\"email\"]").type(user.email);
//       cy.get("input[type=\"password\"]").type(user.password);
//     });
//     cy.get(".btn").contains("Sign in").should("be.visible").click();
//   });
// });

describe("Login", () => {
  let userDetails
  beforeEach(() => {
    cy.fixture("logInCredentials").then((user) => {
      userDetails = user;
    })
  })

  it("Sign in", () => {
    cy.visit("https://react-redux.realworld.io/#/login")
    cy.get("input[type=\"email\"]").type(userDetails.email)
    cy.get("input[type=\"password\"]").type(userDetails.password)
    cy.get(".btn").contains("Sign in").should("be.visible").click()
  })
})

// describe("Login", () => {
//   beforeEach(() => {
//     cy.fixture("logInCredentials").as('userDetails')
//   })
//
//   it("Sign in", () => {
//     cy.visit("https://react-redux.realworld.io/#/login")
//     cy.get("input[type=\"email\"]").type(this.userDetails.email)
//     cy.get("input[type=\"password\"]").type(this.userDetails.password)
//     cy.get(".btn").contains("Sign in").should("be.visible").click()
//   })
// })
