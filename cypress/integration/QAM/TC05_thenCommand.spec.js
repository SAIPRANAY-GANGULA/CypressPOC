describe("Then Command Illustration", function() {
  before("Sign in", function() {
    cy.signIn()
  });

  it("New Post Creation", () => {
    // cy.contains('New Post').click()
    cy.get("ul.navbar-nav").children().contains("New Post").click();
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
    cy.get(".btn-outline-primary", { timeout: 10000}).first().then( ($fav) => {
      const favCount = $fav.text()
      expect(parseInt(favCount)).eq(1)
    }).click()
    cy.reload()
    cy.go("back")
  })
})
