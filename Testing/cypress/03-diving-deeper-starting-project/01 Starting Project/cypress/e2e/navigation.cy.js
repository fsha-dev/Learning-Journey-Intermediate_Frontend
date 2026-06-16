describe("page navigation", () => {
  it("should navigate between pages", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="header-about-link"]').click();
    cy.location("pathname").should("eq", "/about"); //get location which page we are , eq = equal
    cy.go("back"); // back btn browser
    cy.location("pathname").should("eq", "/"); //-> home page
    cy.get('[data-cy="header-home-link"]').click();
    cy.location("pathname").should("eq", "/"); //-> home page
  });
});
