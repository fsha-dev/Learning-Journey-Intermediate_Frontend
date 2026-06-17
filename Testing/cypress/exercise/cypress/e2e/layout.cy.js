describe("global layout", () => {
  it("should display the site logo", () => {
    cy.visit("https://automationexercise.com/");
    cy.get('img[src *="logo"]').as("logoImage");
    cy.get("@logoImage").should("exist");
  });
  it("should display the menu", () => {
    cy.visit("https://automationexercise.com/");
    cy.get('[class *="shop-menu"]').as("mainMenu");
    cy.get("@mainMenu").should("exist");
  });
  it("should display the product sections", () => {
    cy.visit("https://automationexercise.com/");
    cy.get(".features_items").should("exist");
    cy.get(".features_items h2").should("contain.text", "Features Items");
  });
});
