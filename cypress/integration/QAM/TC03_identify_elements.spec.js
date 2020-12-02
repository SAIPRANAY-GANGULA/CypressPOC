describe("Identify Elements", function() {
  it("Sign in", function() {
    cy.visit("https://react-redux.realworld.io/#/login");
    cy.title().should("eq", "Conduit");
    cy.location("protocol").should("eq", "https:");
    // cy.get('input[type="email"]').type('gangulasaipranay@gmail.com')
    // cy.get('input[type="password"]').type('1234567890')
    // cy.get('.btn').contains('Sign in').should('be.visible').click()
    cy.get("form").within(($form) => {
      cy.get("input[type=\"email\"]").type("gangulasaipranay@gmail.com");
      cy.get("input[type=\"password\"]").type("1234567890");
      cy.root().submit(); // submit the form yielded from within
    });
    cy.contains("Your Feed", { timeout: 10000 }).should("be.visible");
  });

  it("New Post", function() {
    // cy.contains('New Post').click()
    cy.get("ul.navbar-nav").children().contains("New Post").click();
    cy.get("form").within(($form) => {
      // cy.get("input[placeholder=\"Article Title\"]").type("Title");
      // cy.get("input[placeholder=\"What's this article about?\"]").type("Learning cypress");
      // cy.get("textarea[placeholder=\"Write your article (in markdown)\"]").type("It's fun to learn cypress :-)")
      cy.get('input').first().type("Title")
      cy.get('input').eq(1).type("Learning cypress")
      cy.get('textarea').first().type("It's fun to learn cypress :-)")
      cy.get(".btn").contains("Publish Article").click()
    });
    cy.url().should("include", "article")
  });

  it("Mark and Unmark fav", function() {
    // cy.get("a").contains("SaiPranay").click();
    // cy.get(".nav-link").contains("SaiPranay").click();
    cy.get("ul.navbar-nav").children().contains("SaiPranay").click()
    cy.contains("My Articles").should("be.visible")
    cy.get(".ion-heart").first().click()
    cy.hash().should("include", "#/@SaiPranay")
    cy.contains("Favorited Articles").click()
    cy.get(".ion-heart").first().click()
    cy.reload()
    // cy.contains("No articles are here... yet.").should("be.visible")
    cy.go("back") // cy.go(-1)
    // cy.go('forward') or cy.go(1)
  })
})
