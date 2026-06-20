describe("page navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should navigate between pages", () => {
    cy.getByDataCy("header-about-link").click();
    cy.location("pathname").should("eq", "/about"); //get location which page we are , eq = equal
    cy.go("back"); // back btn browser
    cy.location("pathname").should("eq", "/"); //-> home page
    cy.get('[data-cy="header-home-link"]').click();
    cy.location("pathname").should("eq", "/"); //-> home page
  });
});
