describe("Alias Concept Illustration",() => {
  before("Sign in", () => {
    cy.signIn()
  });

  it("New Post Creation", () => {
    cy.get("ul.navbar-nav").children().contains("New Post").as('menu'); // alias
    cy.get('@menu').click()
    cy.get("form").within(($form) => {
      cy.get('input').first().type("Title")
      cy.get('input').eq(1).type("Learning cypress")
      cy.get('textarea').first().type("It's fun to learn cypress :-)")
      cy.get(".btn").contains("Publish Article").click()
    });
    cy.url().should("include", "article")
  });

  it("Mark and Unmark fav and Verify Fav Count", function() {
    cy.get("ul.navbar-nav").children().contains("SaiPranay").click()
    cy.contains("My Articles").should("be.visible")
    cy.get(".btn-outline-primary").first().click()
    cy.hash().should("include", "#/@SaiPranay")
    cy.contains("Favorited Articles").click()
    cy.reload()
    // cy.get(".btn-outline-primary", { timeout: 10000}).first().then( ($fav) => {
    //   const favCount = $fav.text()
    //   expect(parseInt(favCount)).eq(1)
    // }).click()
    cy.get(".btn-outline-primary", { timeout: 10000}).first().then( ($fav) => {
      return $fav.text()
    }).as('favCount')  // alias
    cy.get('@favCount').then( ($count) => {
      expect(parseInt($count)).eq(1)
    })
    cy.reload()
    cy.go("back")
  })
})
